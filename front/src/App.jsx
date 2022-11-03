import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Activity from './components/Activity/Activity';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';
import NotFound from './components/NotFound/NotFound';
import ActivityList from './components/ActivityList/ActivityList';

import data from './data/data';
import results from './data/results';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/activity"
          element={(
            <ActivityList
              results={results}
            />
          )}
        />
        <Route
          path="/activity/:id"
          element={(
            <Activity
              data={data}
            />
          )}
        />
        <Route
          path="/register"
          element={<Registration />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
