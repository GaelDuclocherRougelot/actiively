import Activity from "./components/Activity/Activity";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';


import { Routes, Route } from 'react-router-dom';

import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/activity/:id"
          element={<Activity />}
        />

         <Route
          path="/"
          element={<Home />}
        />
         <Route
          path="/register"
          element={<Registration />}
        />
         <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
