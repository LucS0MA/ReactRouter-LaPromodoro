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
    <div className='All'>
      <Header/>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/jeu" element={<Jeu />} />
        <Route path="/duel" element={<DuelPage />} /> {/* Ajoutez cette ligne */}
      </Routes>
      
    </div>
  );
};

export default App;
