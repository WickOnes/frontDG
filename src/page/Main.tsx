import React from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav/Nav";

export const Main = () => {
  return (
    <div className="main">
      
      <Header />
      <Menu />
      
      <Nav />

    </div>
  );
};
