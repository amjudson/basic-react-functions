import {results, payload} from './fetchApi';

class personApi {
  static getAllPersons() {
    return results(`${process.env.API_HOST}/api/Person`, 'GET', 'Person').then(persons => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], persons));
      });
    });
  }

  static getPerson(personId) {
    return results(`${process.env.API_HOST}/api/Person/${personId}`, 'GET', 'Person').then(person => {
      return new Promise((resolve, reject) => {
        resolve(person);
      });
    });
  }

  static savePerson(person) {
    person = Object.assign({}, person); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minpersonNameLength = 2;
      if (person.lastName.length < minpersonNameLength) {
        reject(`Last name must be at least ${minpersonNameLength} characters.`);
      }

      if (person.firstName.length < minpersonNameLength) {
        reject(`First name must be at least ${minpersonNameLength} characters.`);
      }

      if (person.personId) {
        results(`${process.env.API_HOST}/api/Person/${person.personId}`, 'PUT', 'Person', person)
          .then((person) => {
            resolve(person);
          });
      } else {
        results(`${process.env.API_HOST}/api/Person`, 'POST', 'Person', person).then((person) => {
          resolve(person);
        });
      }
    });
  }

  static deletePerson(person) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/Person/${person.personId}`, 'DELETE', 'State', person);
      resolve();
    });
  }
}

export default personApi;
