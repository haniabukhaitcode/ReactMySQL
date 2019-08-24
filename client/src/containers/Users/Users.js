import React, { Component } from "react";
import Styles from "./Users.module.scss";
import { FormButton } from "../../components/Layout/Reusables/Buttons/Buttons";

class Users extends Component {
  state = {
    users: [],
    isloaded: false
  };

  async componentDidMount() {
    const url = "http://localhost:5000/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data, isloaded: true });
  }

  render() {
    let { users, isloaded } = this.state;
    return !isloaded ? (
      <div>Loading...</div>
    ) : (
      <React.Fragment>
        <div className={`${Styles.containerUser} container`}>
          <div
            className={`${Styles.rowUser}  row justify-content-center no-gutters`}
          >
            {!users.id ? (
              users.map(user => (
                <div className={Styles.wrapper} key={user.id}>
                  <div className={`${Styles.colUser} col`}>
                    <div className={Styles.userInfo}>
                      <h3 className={Styles.title}>{user.title}</h3>
                      <p className={Styles.description}>{user.description}</p>
                      <div className={Styles.budget}>Budget:{user.budget}</div>
                      <div className={Styles.btnContainer}>
                        <a href={`mailto:${user.email}`}>
                          <FormButton>Apply Now</FormButton>
                        </a>
                      </div>
                      <div className={Styles.tech}>
                        <small>
                          Technologies Needed: <span>{user.technologies}</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className={`${Styles.rowUser}  row justify-content-center no-gutters`}
              >
                <div className={`${Styles.colUser} col-12`}>
                  <p>No available Users</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
