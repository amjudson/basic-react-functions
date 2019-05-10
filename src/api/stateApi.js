import { payload, results } from './fetchApi';

class StateApi {
  static getAllStates() {
    return results(`${process.env.API_HOST}/api/State`, 'GET', 'State').then(states => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], states));
      });
    });
  }

  static getStateById(stateId) {
    return results(`${process.env.API_HOST}/api/State/${stateId}`, 'GET', 'State')
      .then(state => {
        return new Promise((resolve, reject) => {
          resolve(state);
        });
      });
  }

  static saveState(state) {
    state = Object.assign({}, state); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstateNameLength = 5;
      if (state.description.length < minstateNameLength) {
        reject(`Description must be at least ${minstateNameLength} characters.`);
      }

      if (state.stateId) {
        results(`${process.env.API_HOST}/api/State/${state.stateId}`, 'PUT', 'State', state)
          .then((state) => {
            resolve(state);
          });
      } else {
        results(`${process.env.API_HOST}/api/State`, 'POST', 'State', state).then((state) => {
          resolve(state);
        });
      }
    });
  }

  static deleteState(state) {
    return new Promise((resolve, reject) => {
      results(`${process.env.API_HOST}/api/State/${state.stateId}`, 'DELETE', 'State', state);
      resolve();
    });
  }
}

export default StateApi;
