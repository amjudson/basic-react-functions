import action from './mirrorActions';

export function addError(error) {
  return {
    type: action.ERROR_SET_SUCCESS,
    error
  };
}

export function badError(message) {
  return {
    type: action.ERROR_SET_FAILED,
    message
  };
}
