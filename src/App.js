// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import { useState } from 'react';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react'

export default class App extends Component {
  pageSize = 15

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />

        <Navbar></Navbar>

    
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>

          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"></News>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}



