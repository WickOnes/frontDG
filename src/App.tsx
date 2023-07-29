import "./styles/normalize.css";
import "./styles/variables.scss";

import "./App.scss";

import "./styles/Auth.scss";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Main } from "./page/Main";
import { Auth } from "./page/Auth";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
]);

export default App;
