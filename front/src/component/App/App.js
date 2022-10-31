import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/home';
import FormInscription from '../FormInscription/formInscription';


function App() {
  return (
    <div className="app">
      <header className="App-header">
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/register' element= {<FormInscription />} />

          </Routes>
      </header>
    </div>
  );
}

export default App;
