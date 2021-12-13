import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { uploadFilesRequest } from 'helpers/Axios';

import { UPLOAD_FILES } from '../actions';
import {
  uploadFilesSuccess,
  uploadFilesError,
  uploadFilesProgress,
} from './actions';

function createUploader(id, file) {
  let emit;
  const chan = eventChannel((emitter) => {
    emit = emitter;
    return () => {};
  });

  const uploadProgressCb = (data) => {
    const percentage = Math.round((data.loaded * 100) / data.total);
    emit(percentage);
    if (percentage === 100) emit(END);
  };

  const uploadPromise = uploadFilesRequest(id, file, uploadProgressCb);

  return [uploadPromise, chan];
}

function* uploadFiles({ payload }) {
  try {
    const { id, file } = payload;

    const [uploadPromise, chan] = yield call(createUploader, id, file);
    yield fork(watchProgress, chan);

    const res = yield call(() => uploadPromise);
    yield put(uploadFilesSuccess(res));
  } catch (error) {
    yield put(uploadFilesError(error));
  }
}

function* watchProgress(chan) {
  while (true) {
    // eslint-disable-line no-constant-condition
    const progress = yield take(chan);
    yield put(uploadFilesProgress(progress));
  }
}

export function* wathcUploadFile() {
  yield takeEvery(UPLOAD_FILES, uploadFiles);
}

export default function* rootSaga() {
  yield all([fork(wathcUploadFile)]);
}
