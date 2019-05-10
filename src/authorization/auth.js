// src/Auth/Auth.js
import * as constants from '../../server/serverConstants';
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'iris.auth0.com',
    clientID: 'bWf2cRoykOfdQltI1gtoanKsgxdyQ1Hj',
    redirectUri: `http://localhost:${constants.port}/callback`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
