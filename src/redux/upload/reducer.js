import {
  UPLOAD_FILES,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_ERROR,
  UPLOAD_FILES_PROGRESS,
} from '../actions';

const INIT_STATE = { uploading: false, progress: 0 };

const fn = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILES: {
      return { ...state, progress: 0, uploading: true };
    }

    case UPLOAD_FILES_SUCCESS: {
      return { ...state, uploading: false };
    }

    case UPLOAD_FILES_ERROR: {
      return { ...state, uploading: false, error: action.payload };
    }

    case UPLOAD_FILES_PROGRESS: {
      return { ...state, progress: action.payload };
    }

    default:
      return { ...state };
  }
};
export default fn;
