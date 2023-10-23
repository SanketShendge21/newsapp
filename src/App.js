// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

        <Navbar></Navbar>
    
        <Routes>
          <Route path='/' element={<News key="general" pageSize={5} country="in" category="general"></News>}></Route>

          <Route exact path='/sports' element={<News key="sports" pageSize={5} country="in" category="sports"></News>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={5} country="in" category="business"></News>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={5} country="in" category="science"></News>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={5} country="in" category="health"></News>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={5} country="in" category="entertainment"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}



