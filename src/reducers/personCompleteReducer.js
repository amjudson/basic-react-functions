import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function personCompleteReducer(state = initialState.personCompletes, action) {
  switch (action.type) {
    case actions.LOAD_PERSONCOMPLETES_SUCCESS:
      return action.personCompletes;
    case actions.LOAD_PERSONCOMPLETE_SUCCESS:
      return action.personComplete;
    default:
      return state;
  }
}
