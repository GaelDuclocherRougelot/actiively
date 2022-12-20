/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import ModifActivity from './components/ModifActivity/modifActivity';
import CreateActivity from './components/CreateActivity/createActivity';
import OrganismActivities from './components/OrganismActivities/OrganismActivities';
import useToken from './Hooks/useToken';
import { FiltersContextProvider } from './contexts/FiltersContext';
import { SearchContextProvider } from './contexts/SearchContext';
import './styles/index.scss';

function App() {
  // Hook created to manage token
  const { token, setToken } = useToken();
  const [isLogged, setIsLogged] = useState(false);

  // To maintain login state to true on refresh
  useEffect(
    () => {
      if (token) {
        setIsLogged(true);
      }
    },
    [],
  );

  return (
    <div className="App">
      <Header
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setToken={setToken}
      />
      <SearchContextProvider>
        <FiltersContextProvider>
          <Routes>
            <Route
              path="/"
              element={(
                <Home />
          )}
            />
            <Route
              path="/activity"
              element={(
                <ActivityList />
          )}
            />
            <Route
              path="/activity/:id"
              element={(
                <Activity />
          )}
            />
            <Route
              path="/register"
              element={<Registration />}
            />
            <Route
              path="/login"
              element={(
                <Login
                  setToken={setToken}
                  setIsLogged={setIsLogged}
                  isLogged={isLogged}
                />
          )}
            />
            {/* Restricted pages */}
            <Route
              path="/organism/profile"
              element={isLogged ? (
                <Profil
                  token={token}
                  setToken={setToken}
                  setIsLogged={setIsLogged}
                />
              ) : <Navigate replace to="/login" />}
            />
            <Route
              path="/organism/profile/edit"
              element={isLogged ? <ModifProfil token={token} /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/organism/create"
              element={isLogged ? <CreateActivity token={token} /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/organism/activities"
              element={isLogged ? <OrganismActivities token={token} /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/organism/activity/:id"
              element={isLogged ? <Activity token={token} /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/organism/activity/:id/edit"
              element={isLogged ? <ModifActivity token={token} /> : <Navigate replace to="/login" />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </FiltersContextProvider>
      </SearchContextProvider>
      <Footer />
    </div>
  );
}

export default App;
