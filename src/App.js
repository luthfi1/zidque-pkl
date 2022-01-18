import React, { useState, useEffect } from 'react';
import {
  Route,
} from "react-router-dom"

// layout
import Header from './views/layouts/header'
import Footer from './views/layouts/footer';

// pages
import Home from './views/pages/home';
import Login from './views/pages/auth/login';
import ForgotPassword from './views/pages/auth/forgotPassword';
import Register from './views/pages/auth/register';

function App() {
  let pathName = window.location.pathname
  pathName = pathName.split('/')

  return (
    <div className="App">
      {
        pathName[1] !== "auth" ?
        <Header /> : null
      }
        <Route path='/' exact={true}  component={Home} />
        
        {/* auth */}
        <Route path='/auth/login' exact={true}  component={Login} />
        <Route path='/auth/forgot' exact={true}  component={ForgotPassword} />
        <Route path='/auth/register' exact={true}  component={Register} />
      <Footer />
    </div>
  );
}

export default App;
