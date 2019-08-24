import React, { Component } from "react";
import Styles from "./Footer.module.scss";
// import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Footer Links */}
        <div className={`${Styles.containerFluid} container-fluid`}>
          <div className={`${Styles.row} row`}>
            <div className={`${Styles.col} col`}>
              <h5 className={`${Styles.content} text-center`}>
                Footer Content
              </h5>
              <div className={`${Styles.copyRight} text-center`}>
                © 2019 Done by: Hani Mazen Abukhait
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
