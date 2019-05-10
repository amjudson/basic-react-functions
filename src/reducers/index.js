import { combineReducers } from 'redux';
import students from './studentsReducer';
import student from './studentReducer';
import phones from './phoneReducer';
import accounts from './accountsReducer';
import states from './stateReducer';
import addresses from './addressesReducer';
import addressTypes from './addressTypeReducer';
import invoices from './invoicesReducer';
import totalInvoices from './totalInvoicesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import persons from './personsReducer';
import person from './personReducer';
import personCompletes from './personCompleteReducer';
import personTypes from './personTypeReducer';
import errors from './errorReducer';
import datetime from './datetimeReducer';
import trigger from './triggerReducer';
import startDate from './startDateReducer';

const rootReducer = combineReducers({
  students,
  student,
  phones,
  accounts,
  invoices,
  totalInvoices,
  states,
  addresses,
  addressTypes,
  persons,
  person,
  personTypes,
  personCompletes,
  errors,
  datetime,
  trigger,
  startDate,
  ajaxCallsInProgress
});

export default rootReducer;
