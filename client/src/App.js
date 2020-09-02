import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/content/Home/Home";
import {Route} from "react-router-dom";
import Login from "./components/login_auth/login";
import Edit_profile from "./components/content/Edit_profile/edit_profile";
import Notify from "./components/content/Notify/notify";
import DirectContainer from "./components/content/Direct/directContainer";
import SuggestedContainer from "./components/content/Explore/People/Suggested/SuggestedContainer";
import ProfileContainer from "./components/content/Profile/ProfileContainer";
import HeaderContainder from "./components/HeaderContainder";
import HomeContainer from "./components/content/Home/HomeContainer";


const App =()=> {
  return (
    <div className = 'app-wrapper'>
      <HeaderContainder />
      <div className='content'>
          <Route exact path='/:userName/' component = {ProfileContainer} />
          <Route exact  path='/' component = {HomeContainer} />
          <Route exact  path='/login' component = {Login} />
          <Route exact  path='/edit_profile' component = {Edit_profile} />
          <Route exact  path='/notify' component = {Notify} />
          <Route exact  path='/direct/inbox' render = {() => <DirectContainer page="start" />} />
          <Route exact  path='/direct/t/:id' render = {()=> <DirectContainer page="dialog"/>} />
          <Route exact  path='/explore/people/suggested'  component = {SuggestedContainer} />
          </div>
    </div>
  );
}

export default App;
