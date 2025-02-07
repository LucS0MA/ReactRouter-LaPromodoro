// App.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Jeu from "./pages/Jeu.jsx";
import DuelPage from "./pages/DuelPage.jsx"; // Importez votre composant Duel ici
import Header from "./components/Header.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
