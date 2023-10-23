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
  pageSize = 15
  render() {
    return (
      <div>
        <Router>

        <Navbar></Navbar>
    
        <Routes>
          <Route path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>

          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business"></News>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}



