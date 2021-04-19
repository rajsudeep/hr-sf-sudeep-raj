import React from "react";
import classes from "./Header.module.scss";

const Header = ({ title }) => {
  return <h1 className={classes.header}>{title}</h1>;
};

export default Header;
