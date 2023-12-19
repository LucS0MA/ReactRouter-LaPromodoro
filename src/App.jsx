import { Link, Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Support from "./pages/Support";
import Footer from "./components/Footer";

function App() {
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
      <Footer />
    </>
  );
}

export default App;
