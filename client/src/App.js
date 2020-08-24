import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/content/Home/Home";
import Profile from "./components/content/Profile/Profile";
import {Route} from "react-router-dom";
import styles from "./components/content/Home/Home.module.css";
import Login from "./components/login_auth/login";
import Edit_profile from "./components/content/Edit_profile/edit_profile";
import Notify from "./components/content/Notify/notify";
import Direct from "./components/content/Direct/direct";
import DirectContainer from "./components/content/Direct/directContainer";
import Suggested from "./components/content/Explore/People/Suggested/Suggested";
import SuggestedContainer from "./components/content/Explore/People/Suggested/SuggestedContainer";


const App =()=> {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <div className='content'>
          <Route path='/profile' component = {Profile} />
          <Route exact  path='/' component = {Home} />
          <Route exact  path='/login' component = {Login} />
          <Route exact  path='/edit_profile' component = {Edit_profile} />
          <Route exact  path='/notify' component = {Notify} />
          <Route exact  path='/direct/inbox' render = {() => <DirectContainer page="start" />} />
          <Route  path='/direct/t' render = {()=> <DirectContainer page="dialog"/>} />
          <Route  path='/explore/people/suggested'  component = {SuggestedContainer} />
          </div>
    </div>
  );
}

export default App;
