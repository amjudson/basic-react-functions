import action from './mirrorActions';
import TotalInvoiceApi from '../api/totalInvoiceApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadTotalInvoicesSuccess(totalInvoices) {
  return {
    type: action.LOAD_TOTALINVOICES_SUCCESS,
    totalInvoices
  };
}

export function loadTotalInvoicesFailed(message) {
  return {
    type: action.LOAD_TOTALINVOICES_FAILED,
    message
  };
}

export function loadTotalInvoiceSuccess(totalInvoice) {
  return {
    type: action.LOAD_TOTALINVOICE_SUCCESS,
    totalInvoice
  };
}

export function loadTotalInvoiceFailed(message) {
  return {
    type: action.LOAD_TOTALINVOICE_FAILED,
    message
  };
}

export function createTotalInvoiceSuccess(totalInvoice) {
  return {
    type: action.CREATE_TOTALINVOICE_SUCCESS,
    totalInvoice
  };
}

export function createTotalInvoiceFailed(message) {
  return {
    type: action.CREATE_TOTALINVOICE_FAILED,
    message
  };
}

export function updateTotalInvoiceSuccess(totalInvoice) {
  return {
    type: action.UPDATE_TOTALINVOICE_SUCCESS,
    totalInvoice
  };
}

export function updateTotalInvoiceFailed(message) {
  return {
    type: action.UPDATE_TOTALINVOICE_FAILED,
    message
  };
}

export function deleteTotalInvoiceSuccess(totalInvoice) {
  return {
    type: action.DELETE_TOTALINVOICE_SUCCESS,
    totalInvoice
  };
}

export function deleteTotalInvoiceFailed(message) {
  return {
    type: action.DELETE_TOTALINVOICE_FAILED,
    message
  };
}

export function loadTotalInvoices() {
  let totalInvoices = [];
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return TotalInvoiceApi.getAllInvoices().then(totalInvoices => {
        dispatch(loadTotalInvoicesSuccess(totalInvoices));
      });
    } catch (error) {
      return dispatch(loadTotalInvoicesFailed(error.message));
    }
  };
}

export function loadTotalInvoice(invoiceId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return TotalInvoiceApi.getInvoiceById(invoiceId).then(totalInvoice => {
        dispatch(loadTotalInvoiceSuccess(totalInvoice));
      });
    } catch (error) {
      return dispatch(loadTotalInvoiceFailed(error));
    }
  };
}

export function saveTotalInvoice(totalInvoice) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return TotalInvoiceApi.saveInvoice(totalInvoice).then(savedInvoice => {
        totalInvoice.invoiceId ? dispatch(updateTotalInvoiceSuccess(savedInvoice)) :
          dispatch(createTotalInvoiceSuccess(savedInvoice));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return totalInvoice.invoiceId ? dispatch(updateTotalInvoiceFailed(error.message)) :
        dispatch(createTotalInvoiceFailed(error.message));
    }
  };
}

export function deleteTotalInvoice(totalInvoice) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return TotalInvoiceApi.deleteInvoice(totalInvoice).then(deletedInvoice => {
        dispatch(deleteTotalInvoiceSuccess(totalInvoice));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return dispatch(deleteTotalInvoiceFailed(error.message));
    }
  };
}
