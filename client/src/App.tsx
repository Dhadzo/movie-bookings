import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import ProtectedRoute from './components/protected-route';
import Bookings from './pages/bookings';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import WelcomePage from './pages/welcome-page';

const App = ({}) => {
  const currentUser = useSelector((state:any) => state.user.currentUser);
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() =>currentUser ? (<Redirect to='/home'/>):(<WelcomePage/>)} />
          <Route path="/login" render={() =>currentUser ? (<Redirect to='/home'/>):(<Login/>)}/>
          <Route path="/register" render={() =>currentUser ? (<Redirect to='/home'/>):(<Register/>)}/>
          <ProtectedRoute component={Bookings} path="/bookings" />
          <ProtectedRoute component={Home} path="/home" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
