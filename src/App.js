import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    let response = await fetch(`https://api.github.com/search/users?q=${text}`);
    let data = await response.json();
    
    this.setState({ users: data.items, loading: false });
  }

  getUser = async (username) => {
    this.setState({ loading: true });

    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();

    this.setState({ user: data, loading: false });
  }

  getRepos = async (username) => {
    this.setState({ loading: true });

    let response = await fetch(`https://api.github.com/users/${username}/repos`);
    let data = await response.json();

    this.setState({ repos: data, loading: false });
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (message, type) => {
    this.setState({ alert: {msg: message, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 2500);
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar title="Github finder" />
          <div className="container">
            <Alert alert={ this.state.alert } />
            <Switch>
              <Route exact path="/" render={ props => (
                <Fragment>
                  <Search searchUsers={ this.searchUsers }
                    clearUsers={ this.clearUsers }
                    showClear={ users.length > 0 ? true : false }
                    setAlert={ this.setAlert }
                  />
                  <Users loading={ loading } users={ users } />
                </Fragment>
              )} />
              <Route exact path="/about" component={ About } />
              <Route exact path="/user/:login" render={ props => (
                <Fragment>
                  <User
                    { ...props }
                    getUser = { this.getUser }
                    user = { this.state.user }
                    getRepos = { this.getRepos }
                    repos = { this.state.repos }
                    loading = { loading }
                  />
                </Fragment>
              ) } />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
