import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../Header/Header";
import "./nav.scss";

export const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          {/* <NavLink to={'/'}>Main</NavLink> */}
          <NavLink className="navLink nav__navLink" to={"/Authlet"}>
            Аутлет
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
