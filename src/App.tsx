import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Main } from "./page/Main";
import { Auth } from "./page/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  // {
  //   path: "*",
  //   element: <Navigate to="/" replace={true} />,
  // },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
