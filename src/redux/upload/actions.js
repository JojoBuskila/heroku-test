// eslint-disable-next-line import/no-cycle
import {
  UPLOAD_FILES,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_ERROR,
  UPLOAD_FILES_PROGRESS,
} from '../actions';

export const uploadFiles = (id, file) => ({
  type: UPLOAD_FILES,
  payload: { id, file },
});

export const uploadFilesSuccess = (file) => ({
  type: UPLOAD_FILES_SUCCESS,
  payload: file,
});

export const uploadFilesError = (error) => ({
  type: UPLOAD_FILES_ERROR,
  payload: error,
});

export const uploadFilesProgress = (progress) => ({
  type: UPLOAD_FILES_PROGRESS,
  payload: progress,
});
