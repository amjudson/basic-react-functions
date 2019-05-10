import {results} from './fetchApi';

class personCompleteApi {
  static getAllPersonCompletes() {
    return results(`${process.env.API_HOST}/api/PersonComplete`, 'GET', 'PersonComplete').then(personCompletes => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], personCompletes));
      });
    });
  }

  static getPersonComplete(personCompleteId) {
    return results(`${process.env.API_HOST}/api/PersonComplete${personCompleteId}`, 'GET', 'PersonComplete').then(personComplete => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], personComplete));
      });
    });
  }
}

export default personCompleteApi;
