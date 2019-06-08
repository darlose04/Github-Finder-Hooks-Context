// import React, { useState, Fragment } from "react";
// useState not needed anymore since we aren't using component level state
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
// import Users from "./components/users/Users";
// import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
// import axios from "axios";
import "./App.css";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // };

  // this is basically the same thing as doing what's in state above, except in functional component
  // const [users, setUsers] = useState([]); // this can go since it's not being used this way, it's coming from context instead, same with the others
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // these methods/functions are going to get moved to the GithubState file
  // search github users
  // const searchUsers = async text => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ users: res.data.items, loading: false });
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // get a single Github user
  // const getUser = async username => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ user: res.data, loading: false });
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // get users repos
  // const getUserRepos = async username => {
  //   // this.setState({ loading: true });
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   // this.setState({ repos: res.data, loading: false });
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  // clear users from state
  // const clearUsers = () => {
  //   // this.setState({ users: [], loading: false });
  //   setUsers([]);
  //   setLoading(false);
  // };

  // THIS IS GOING TO THE ALERTSTATE
  // set alert
  // have to change it from setAlert because setAlert is used with useState
  // const showAlert = (msg, type) => {
  //   // this.setState({ alert: { msg: msg, type: type } });
  //   setAlert({ msg, type });

  //   setTimeout(() => {
  //     // this.setState({ alert: null });
  //     setAlert(null);
  //   }, 5000);
  // };

  // no longer needed since state is longer here
  // const { users, user, repos, loading, alert } = this.state;

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              {/* <Alert alert={alert} /> */}
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                  // render={props => (
                  //   <Fragment>
                  //     <Search
                  //     // searchUsers={searchUsers} / no longer need this since it can be accessed through context
                  //     // clearUsers={clearUsers}
                  //     // showClear={users.length > 0 ? true : false}
                  //     // setAlert={showAlert}
                  //     />
                  //     {/* <Users loading={loading} users={users} />  */}
                  //     {/* this info will come from the context now, the app level state */}
                  //     <Users />
                  //   </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  component={User} // we can just use this since we no longer need the props
                  // render={props => (
                  //   <User
                  //     {...props}
                  //     // getUser={getUser} // this stuff is coming from context now
                  //     // getUserRepos={getUserRepos}
                  //     // user={user}
                  //     // repos={repos}
                  //     loading={loading}
                  //   />
                  // )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
