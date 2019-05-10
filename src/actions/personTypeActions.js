import action from './mirrorActions';
import personTypeApi from '../api/personTypeApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPersonTypesSuccess(personTypes) {
  return {
    type: action.LOAD_PERSON_TYPES_SUCCESS,
    personTypes
  };
}

export function loadPersonTypesFailed(message) {
  return {
    type: action.LOAD_PERSON_TYPES_FAILED,
    message
  };
}

export function loadPersonTypeSuccess(personType) {
  return {
    type: action.LOAD_PERSON_TYPE_SUCCESS,
    personType
  };
}

export function loadPersonTypeFailed(message) {
  return {
    type: action.LOAD_PERSON_TYPE_FAILED,
    message
  };
}

export function createPersonTypeSuccess(personType) {
  return {
    type: action.CREATE_PERSON_TYPE_SUCCESS,
    personType
  };
}

export function createPersonTypeFailed(message) {
  return {
    type: action.CREATE_PERSON_TYPE_FAILED,
    message
  };
}

export function updatePersonTypeSuccess(personType) {
  return {
    type: action.UPDATE_PERSON_TYPE_SUCCESS,
    personType
  };
}

export function updatePersonTypeFailed(message) {
  return {
    type: action.UPDATE_PERSON_TYPE_FAILED,
    message
  };
}

export function loadPersonTypes() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personTypeApi.getAllPersonTypes().then(personTypes => {
        dispatch(loadPersonTypesSuccess(personTypes));
      });
    } catch (error) {
      return dispatch(loadPersonTypesFailed(error.message));
    }
  };
}

export function loadPersonType(personTypeId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personTypeApi.getPersonType(personTypeId).then(personType => {
        dispatch(loadPersonTypeSuccess(personType));
      })
    } catch (error) {
      return dispatch(loadPersonTypeFailed(error.message));
    }
  };
}

export function savePersonType(personType) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return personTypeApi.savePersonType(personType).then(savedPersonType => {
        personType.personTypeId ? dispatch(updatePersonTypeSuccess(savedPersonType)) :
          dispatch(createPersonTypeSuccess(savedPersonType));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return personType.personTypeId ? dispatch(updatePersonTypeFailed(error.message)) :
        dispatch(createPersonTypeFailed(error.message));
    }
  };
}
