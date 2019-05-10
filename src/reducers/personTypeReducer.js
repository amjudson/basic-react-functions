import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function personReducer(state = initialState.personTypes, action) {
  switch (action.type) {
    case actions.LOAD_PERSON_TYPES_SUCCESS:
      return action.personTypes;
    case actions.CREATE_PERSON_TYPE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.personType)
      ];
    case actions.UPDATE_PERSON_TYPE_SUCCESS:
      return [
        ...state.filter(personType => personType.personId !== action.personType.personTypeId),
        Object.assign({}, action.personType)
      ];
    default:
      return state;
  }
}
