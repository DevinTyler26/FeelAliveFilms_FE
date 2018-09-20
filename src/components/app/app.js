import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Favicon from 'react-favicon';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Profile from '../profile/profile';
// import Garage from '../garage/garage';
import Navbar from '../navbar/navbar';
import './app.scss';
import favicon from '../../assets/favicon.ico';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Favicon url={ favicon } />
            <Navbar />
            <Route exact path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profiles" component={Profile} />
            {/* <Route exact path="/garages" component={Garage} />             */}
          </div>
        </BrowserRouter>
        <footer className="footer"> © Feel Alive Films - 2018</footer>
      </div>
    );
  }
}
