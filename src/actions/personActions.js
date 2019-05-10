import action from './mirrorActions';
import personApi from '../api/personApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPersonsSuccess(persons) {
  return {
    type: action.LOAD_PERSONS_SUCCESS,
    persons
  };
}

export function loadPersonsFailed(message) {
  return {
    type: action.LOAD_PERSONS_FAILED,
    message
  };
}

export function loadPersonSuccess(person) {
  return {
    type: action.LOAD_PERSON_SUCCESS,
    person
  };
}

export function loadPersonFailed(message) {
  return {
    type: action.LOAD_PERSON_FAILED,
    message
  };
}

export function personFormChangSuccess(person) {
  return {
    type: action.FORM_CHANGE_PERSON_SUCCESS,
    person
  };
}

export function personFormChangFailed(message) {
  return {
    type: action.FORM_CHANGE_PERSON_FAILED,
    message
  };
}

export function createPersonSuccess(person) {
  return {
    type: action.CREATE_PERSON_SUCCESS,
    person
  };
}

export function createPersonFailed(message) {
  return {
    type: action.CREATE_PERSON_FAILED,
    message
  };
}

export function updatePersonSuccess(person) {
  return {
    type: action.UPDATE_PERSON_SUCCESS,
    person
  };
}

export function updatePersonFailed(message) {
  return {
    type: action.UPDATE_PERSON_FAILED,
    message
  };
}

export function loadPersons() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personApi.getAllPersons().then(persons => {
        dispatch(loadPersonsSuccess(persons));
      });
    } catch (error) {
      return dispatch(loadPersonsFailed(error.message));
    }
  };
}

export function getPersonById(personId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return personApi.getPerson(personId).then(person => {
        dispatch(loadPersonSuccess(person));
      })
    } catch (error) {
      return dispatch(loadPersonFailed(error.message));
    }
  };
}

export function personFormChange(person) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return dispatch(personFormChangeSuccess(person));
    } catch (error) {
      return dispatch(personFormChangeFailed(error.message));
    }
  };
}

export function savePerson(person) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return personApi.savePerson(person).then(savedPerson => {
        person.personId ? dispatch(updatePersonSuccess(savedPerson)) :
          dispatch(createPersonSuccess(savedPerson));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return person.personId ? dispatch(updatePersonFailed(error.message)) :
        dispatch(createPersonFailed(error.message));
    }
  };
}
