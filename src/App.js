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

import React, { useState } from 'react'

export default function App() {
  let pageSize = 15

  let apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress] = useState(0)

  // const setProgress = (progress)=>{
  //   setState({progress : progress})
  // }


    return (
      <div>
        <Router>

        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

        <Navbar></Navbar>

    
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"></News>}></Route>

          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"></News>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}



