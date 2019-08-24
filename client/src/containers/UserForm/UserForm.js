import React from "react";
import Styles from "./UserForm.module.scss";
import { FormButton } from "../../components/Layout/Reusables/Buttons/Buttons";
import { updateObject } from "../../shared/ulility";
import axios from "axios";
import UserValidation from "./UserValidation/UserValidation";

class UserForm extends React.Component {
  state = {
    title: "",
    description: "",
    budget: "",
    email: "",
    technologies: ""
  };

  handleChange = event => {
    console.log("test");
    let name = event.target.name;
    let value = event.target.value;
    const updatedControls = updateObject(this.state, {
      [name]: value
    });
    this.setState(updatedControls);
    console.log(this.state);
  };

  async sendData(e) {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/users/";

      const response = await axios.post(url, this.state);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className={`${Styles.formContainer} container`}>
        <h1 className={Styles.Title}>Add A User</h1>
        <p className={Styles.paragraph}>
          Your contact email will be shared with registered users to apply to
          Our website
        </p>
        <form
          onSubmit={this.sendData.bind(this)}
          action="/users/add"
          method="POST"
        >
          <UserValidation
            title="User Title"
            type="text"
            name="title"
            onChange={this.handleChange}
            placeholder="eg. Small Wordpress website, React developer"
            maxLength={100}
          />

          <UserValidation
            title="Technologies Needed"
            type="text"
            name="technologies"
            onChange={this.handleChange}
            placeholder="eg. javascript, react, PHP"
            maxLength={100}
          />

          <UserValidation
            title="budget"
            name="budget"
            type="number"
            onChange={this.handleChange}
            placeholder="eg. 500, 5000, 10000"
          />

          <UserValidation
            title="Gig Description"
            type="textarea"
            name="description"
            onChange={this.handleChange}
            placeholder="Describe the details of your skill"
            maxLength={498}
          />

          <UserValidation
            title="Contact Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Enter an email"
            maxLength={100}
          />

          <div className={Styles.btnContainer}>
            <div className={Styles.btn}>
              <FormButton type="submit">Submit</FormButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
