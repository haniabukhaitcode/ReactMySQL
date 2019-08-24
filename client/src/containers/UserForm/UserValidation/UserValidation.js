import React from "react";
import Styles from "./UserValidation.module.scss";

const UserValidation = props => {
  return (
    <React.Fragment>
      <div className={`${Styles.inputContainer} container`}>
        <div className={`${Styles.inputRow} row justify-content-center `}>
          <label htmlFor="title" className={`${Styles.label} col-2`}>
            {props.title}
          </label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className={`${Styles.inputBox} col-9`}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserValidation;
