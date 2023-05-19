import React from "react";
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className={styled.headerWrapper}>
      <div className="countainer">
        <div className={styled.header}>
          <h3>{title}</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cart">pages</Link>
            </li>
            <li>
              <Link to="/create-article">cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
