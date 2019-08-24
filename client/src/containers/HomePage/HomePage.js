import React, { Component } from "react";
import Styles from "./HomePage.module.scss";
import { FormButton } from "../../components/Layout/Reusables/Buttons/Buttons";

class HomePage extends Component {
  state = {
    users: [],
    isloaded: false
  };

  async componentDidMount() {
    const url = "http://localhost:5000/api/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data, isloaded: true });
  }

  render() {
    return (
      <React.Fragment>
        <section id="search" className="search-wrap">
          <h1>Find A Coding Gig</h1>
          <form action="/users/search" className="search-form">
            <i className="fas fa-search" />
            <input
              type="search"
              name="term"
              placeholder="Javascript, PHP, Rails, etc..."
            />
            <input type="submit" value="Search" />
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
