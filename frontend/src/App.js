import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import LoginPage from './components/Loginpage';
import Memecreator from './components/Memecreator';
import Templates from './components/Templates';
import Home from './components/Home';

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
          
          <Route element={ <Navigate to="home" /> } path="/" />
          <Route element={ <Home /> } path="home" />
          <Route element={ <Memecreator /> } path="Memecreator" />
          <Route element={ <Templates /> } path="Templates" />
          <Route element={ <LoginPage /> } path="login" />
          <Route element={ <Notfound /> } path="*" />


          </Routes>
      </BrowserRouter>
  );
}

export default App;
