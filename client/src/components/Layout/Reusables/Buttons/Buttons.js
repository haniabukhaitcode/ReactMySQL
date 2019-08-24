import React from "react";
import Styles from "./Buttons.module.scss";

const PrimaryButton = props => {
  return (
    <button
      type={props.type}
      onClick={props.click}
      onChange={props.change}
      className={props.myClass}
      title={props.title}
    >
      {props.name}
    </button>
  );
};

const FormButton = ({ type, click, change, title, name, children }) => {
  return (
    <button
      className={Styles.FormButton}
      type={type}
      onClick={click}
      onChange={change}
      title={title}
    >
      {name}
      {children}
    </button>
  );
};
const BurgerButton = props => {
  return (
    <div className={Styles.spanContainer}>
      <button className={Styles.spanRow} onClick={props.openSidebar}>
        <span className={Styles.spanLine} />
        <span className={Styles.spanLine} />
        <span className={Styles.spanLine} />
      </button>
    </div>
  );
};
export { PrimaryButton, FormButton, BurgerButton };
