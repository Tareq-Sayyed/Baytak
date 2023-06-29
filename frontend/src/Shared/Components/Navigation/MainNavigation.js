// Packages
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
// Components and stylings.
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/Backdrop";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {isOpen && <BackDrop onClick={handleClick} />}
        <SideDrawer show = {isOpen} onClick = {handleClick}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleClick}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
