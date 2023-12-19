import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Jeu from "./pages/Jeu.jsx";

import App from "./App.jsx";
import "./index.css";
import DuelPage from "./pages/DuelPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jeu",
        element: <Jeu />,
      },
      {
        path: "/duel",
        element: <DuelPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
