import {results} from './fetchApi';

class totalInvoiceApi {
  static getAllInvoices() {
    return results(`${process.env.API_HOST}/api/TotalInvoice`, 'GET', 'Invoice').then(totalInvoices => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], totalInvoices));
      });
    });
  }

  static getInvoiceById(invoiceId) {
    return results(`${process.env.API_HOST}/api/TotalInvoice/${invoiceId}`, 'GET', 'Invoice')
      .then(totalInvoice => {
        return new Promise((resolve, reject) => {
          resolve(totalInvoice);
        });
      });
  }

  static saveInvoice(totalInvoice) {
    totalInvoice = Object.assign({}, totalInvoice); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const mintotalInvoiceNameLength = 2;
      if (totalInvoice.totalInvoiceId) {
        results(`${process.env.API_HOST}/api/TotalInvoice/${totalInvoice.invoiceId}`, 'PUT', 'Invoice', totalInvoice)
          .then((totalInvoice) => {
            resolve(totalInvoice);
          });
      } else {
        results(`${process.env.API_HOST}/api/Invoice`, 'POST', 'Invoice', totalInvoice).then((totalInvoice) => {
          resolve(totalInvoice);
        });
      }
    });
  }

  static deleteInvoice(totalInvoice) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/TotalInvoice/${totalInvoice.invoiceId}`, 'DELETE', 'State', totalInvoice);
      resolve();
    });
  }
}

export default totalInvoiceApi;
