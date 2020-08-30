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


const App =()=> {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <div className='content'>
          <Route path='/profile' component = {ProfileContainer} />
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
