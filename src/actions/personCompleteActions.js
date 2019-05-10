import action from './mirrorActions';
import personCompleteApi from '../api/personCompleteApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPersonCompletesSuccess(personCompletes) {
  return {
    type: action.LOAD_PERSONCOMPLETES_SUCCESS,
    personCompletes
  };
}

export function loadPersonCompletesFailed(message) {
  return {
    type: action.LOAD_PERSONCOMPLETES_FAILED,
    message
  };
}

export function loadPersonCompleteSuccess(personComplete) {
  return {
    type: action.LOAD_PERSONCOMPLETE_SUCCESS,
    personComplete
  };
}

export function loadPersonCompleteFailed(message) {
  return {
    type: action.LOAD_PERSONCOMPLETE_FAILED,
    message
  };
}

export function loadPersonCompletes() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personCompleteApi.getAllPersonCompletes().then(personCompletes => {
        dispatch(loadPersonCompletesSuccess(personCompletes));
      });
    } catch (error) {
      return dispatch(loadPersonCompletesFailed(error.message));
    }
  };
}

export function loadPersonComplete(personId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personCompleteApi.getPersonComplete(personId).then(personComplete => {
        dispatch(loadPersonCompleteSuccess(personComplete));
      });
    } catch (error) {
      return dispatch(loadPersonCompleteFailed(error.message));
    }
  };
}
