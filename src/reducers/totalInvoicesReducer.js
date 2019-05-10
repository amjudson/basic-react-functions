import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function invoiceReducer(state = initialState.totalInvoices, action) {
  switch (action.type) {
    case actions.LOAD_TOTALINVOICES_SUCCESS:
      return action.totalInvoices;
    case actions.LOAD_TOTALINVOICE_SUCCESS:
      return action.totalInvoice;
    case actions.CREATE_TOTALINVOICE_SUCCESS:
      return [
        ...state.filter(a => a.invoiceId !== action.totalInvoice.invoiceId).sort(invoice => invoice.name),
        Object.assign({}, action.totalInvoice)
      ];
    case actions.UPDATE_TOTALINVOICE_SUCCESS:
      return [
        ...state.filter(invoice => invoice.invoiceId !== action.totalInvoice.invoiceId).sort(invoice => invoice.name),
        Object.assign({}, action.totalInvoice)
      ];
    case actions.DELETE_TOTALINVOICE_SUCCESS: {
      return state.filter(invoice => invoice.invoiceId !== action.totalInvoice.invoiceId);
    }
    default:
      return state;
  }
}
