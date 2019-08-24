import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.scss";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={`${Styles.containerNavbar} container`}>
          <div
            className={`${
              Styles.rowNavbar
            } row align-items-center justify-content-start text-center`}
          >
            <Link className={`${Styles.link} col`} to="/">
              Home
            </Link>

            <Link className={`${Styles.link} col`} to="/users">
              All users
            </Link>

            <Link className={`${Styles.link} col`} to="/users/add">
              Add User
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
