import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/header';
import Home from '../Home/home';
import ActivityPage from '../AcitivityPage/activityPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/activity/:id' element= {<ActivityPage />} />

          </Routes>
      </header>
    </div>
  );
}

export default App;
