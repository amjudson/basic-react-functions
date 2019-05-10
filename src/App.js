import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import Home from './components/Home';
import PersonManager from './containers/person/personManager';
import PersonFormManager from './containers/person/personFormManager';
import PageNotFound from './components/common/PageNotFound';
import DateInput from './components/examples/DateInput';
import About from './components/About';
import TestActions from './components/examples/TestActions';
import ModalTesting from './components/modals/modalTesting';
import ImageZoom from './components/examples/ImageZoom';
import Callback from './components/Callback';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import '@fortawesome/fontawesome-pro/css/all.css'
import '../src/css/style.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          <Navigation />
          <main className='main'>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/person/:id' component={PersonFormManager} />
              <Route path='/person' component={PersonManager} />
              <Route path='/datepicker' component={DateInput} />
              <Route path='/trigger' component={TestActions} />
              <Route path='/modals' component={ModalTesting} />
              <Route path='/imagezoom' component={ImageZoom} />
              <Route path='/about' component={About} />
              <Route path='/callback' component={Callback} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
/*
            <Route path='/person/:id' render={() => {
              return <PersonFormManager />
            }} />

*/
//            <Route path='/person/:id' component={PersonFormManager} />
