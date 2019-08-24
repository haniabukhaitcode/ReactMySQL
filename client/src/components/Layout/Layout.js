import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Styles from "./Layout.module.scss";
const Layout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={Styles.bodyContainer}>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
