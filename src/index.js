import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import ErrorBoundary from './components/errors/ErrorBoundary';
import store from './stores/configureStore';
//import { ConnectedRouter as Router, routerMiddleware } from 'react-router-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../src/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AuthClass from './authorization/authClass';
import dotenv from 'dotenv';

const test = (
  <div>
    <h1>Testing Hot Reload</h1>
  </div>
)

dotenv.config();

const history = createBrowserHistory();
const node1 = document.getElementById('container');
const body = (
  <ErrorBoundary>
  <Provider store={store}>
    <Router history={history}>
        <App store={store} />
    </Router>
  </Provider>
  </ErrorBoundary>
)


// console.log('Start Auth');
// const auth = new AuthClass(history);
// auth.login();
// debugger;
// console.log('End Auth');

if (node1) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App history={history}/>
      </Router>
    </Provider>,
    node1);
}
