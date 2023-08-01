import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/header.scss";
import { arrowLeft } from "../../variables/variables";

export const Header = () => {
  return (
    <div className="header">
      <div className="arrowL">{arrowLeft}</div>
      <NavLink className="navLink header__navLink" to={"/"}>
        На головну
      </NavLink>
    </div>
  );
};
