import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case actions.LOAD_STUDENTS_SUCCESS:
      return action.students.sort((student1, student2) => student1.lastName.localeCompare(student2.lastName));
    case actions.LOAD_STUDENTS_FAILED:
      return action.message;
    default:
      return state;
  }
}
