import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

function Loading() {
  return <h3>Loading...</h3>;
}

const Homepage = Loadable({
  loader: () => import("./containers/HomePage/HomePage"),
  loading: Loading
});
const Users = Loadable({
  loader: () => import("./containers/Users/Users"),
  loading: Loading
});
const UserForm = Loadable({
  loader: () => import("./containers/UserForm/UserForm"),
  loading: Loading
});

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/add" component={UserForm} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
