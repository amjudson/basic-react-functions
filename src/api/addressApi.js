import {payload, results} from './fetchApi';

class AddressApi {
  static getAllAddresses() {
    return results(`${process.env.API_HOST}/api/Address`, 'GET', 'Address').then(addresses => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], addresses));
      });
    });
  }

  static getAddressById(addressId) {
    return results(`${process.env.API_HOST}/api/Address/${addressId}`, 'GET', 'Address').then(address => {
      return new Promise((resolve, reject) => {
        resolve(address);
      });
    });
  }

  static saveAddress(address) {
    address = Object.assign({}, address); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minaddressNameLength = 5;
      if (address.addressLine1.length < minaddressNameLength) {
        reject(`Address line one must be at least ${minaddressNameLength} characters.`);
      }

      if (address.city.length < minaddressNameLength) {
        reject(`City must be at least ${minaddressNameLength} characters.`);
      }

      if (address.zip.length < minaddressNameLength) {
        reject(`Zip must be at least ${minaddressNameLength} characters.`);
      }

      if (address.addressId) {
        results(`${process.env.API_HOST}/api/Address/${address.addressId}`, 'PUT', 'Address', address)
          .then((address) => {
          resolve(address);
        });
      } else {
        results(`${process.env.API_HOST}/api/Address/${address.addressId}`, 'POST', 'Address', address)
          .then((address) => {
          resolve(address);
        });
      }
    });
  }

  static deleteAddress(address) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Address/${address.addressId}`, 'DELETE', 'Address', address);
      resolve();
    });
  }
}

export default AddressApi;

