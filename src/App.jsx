// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Jeu from './pages/Jeu.jsx';
import DuelPage from './pages/DuelPage.jsx'; // Importez votre composant Duel ici
import Header from './components/Header.jsx';
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
      <main>
        <Outlet />
      </main>
      
    </>
  );
};

export default App;
