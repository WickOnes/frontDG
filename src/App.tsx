import "./styles/normalize.css";
import "./styles/variables.scss";

import "./App.scss";

import "./styles/Auth.scss";

import { Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { Auth } from "./page/Auth";

import { Header } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { AuthletForm } from "./components/AuthletForm/AuthletForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>{routeComponents}</Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/Authlet",
    component: AuthletForm,
  },
  { path: "/Auth", component: Auth },
  {
    path: "*",
    component: Main,
  },
];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={path} Component={component} key={key} />
));

export default App;
