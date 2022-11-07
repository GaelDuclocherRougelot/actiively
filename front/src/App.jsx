import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Activity from './components/Activity/Activity';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';
import NotFound from './components/NotFound/NotFound';
import ActivityList from './components/ActivityList/ActivityList';
import Profil from './components/Profil/profil';
import ModifProfil from './components/ModifProfil/modifProfil';

import data from './data/data';
import results from './data/results';

import './styles/index.scss';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

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
          path="/organism/:id/profil"
          element={<Profil />}
        />
        <Route
          path="/organism/:id/profil/modif"
          element={<ModifProfil />}
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
