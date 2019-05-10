import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentReducer(state = initialState.student, action) {
  switch (action.type) {
    case actions.LOAD_STUDENTS_SUCCESS:
      return action.students;
    case actions.CREATE_STUDENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.student)
      ];
    case actions.UPDATE_STUDENT_SUCCESS:
      return [
        ...state.filter(student => student.studentId !== action.student.studentId),
        Object.assign({}, action.student)
      ];
    default:
      return state;
  }
}
