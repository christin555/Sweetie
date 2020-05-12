import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/content/Home/Home";
import Profile from "./components/content/Profile/Profile";
import {Route} from "react-router-dom";


const App =()=> {
  return (
    <div className = 'app-wrapper'>
      <Header />
      <div className='content'>
      <Route path='/' component = {Home} />
      <Route path='/profile' component = {Profile} />
    </div>
    </div>
  );
}

export default App;
