import {results} from './fetchApi';

class personTypeApi {
  static getAllPersonTypes() {
    return results(`${process.env.API_HOST}/api/PersonType`, 'GET', 'PersonType').then(personTypes => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], personTypes));
      });
    });
  }

  static getPersonType(personTypeId) {
    return results(`${process.env.API_HOST}/api/PersonType${personTypeId}`, 'GET', 'PersonType').then(personTypes => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], personTypes));
      });
    });
  }

  static savePersonType(personType) {
    personType = Object.assign({}, personType); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minpersonTypeNameLength = 2;
      if (personType.lastName.length < minpersonTypeNameLength) {
        reject(`Last name must be at least ${minpersonTypeNameLength} characters.`);
      }

      if (personType.firstName.length < minpersonTypeNameLength) {
        reject(`First name must be at least ${minpersonTypeNameLength} characters.`);
      }

      if (personType.personTypeId) {
        results(`${process.env.API_HOST}/api/PersonType/${personType.personTypeId}`, 'PUT', 'PersonType', personType)
          .then((personType) => {
            resolve(personType);
          });
      } else {
        results(`${process.env.API_HOST}/api/PersonType`, 'POST', 'PersonType', personType).then((personType) => {
          resolve(personType);
        });
      }
    });
  }

  static deletePersonType(personType) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/PersonType/${personType.personTypeId}`, 'DELETE', 'State', personType);
      resolve();
    });
  }
}

export default personTypeApi;
