import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {
    const {
      avatar_url,
      html_url,
      name,
      company,
      bio,
      hireable
    } = this.props.user;

    if (this.props.loading) {
      return <Spinner />
    } else {
      return (
        <Fragment>
          <Link to="/">Back</Link>
          <div className="card">
            <div className="m-1 text-center">
              <img width="150" height="150" src={`${avatar_url}`} alt="Avatar" className="round-img" />
              <h2>{ name }{ hireable ? ' - Hire me!' : '' }</h2>
              <h3>{ company }</h3>
              <h4>{ bio }</h4>
              <p>Github: <a href={`${ html_url }`} target="_blank" rel="noreferrer">{ html_url }</a></p>
            </div>
            <div className="m-1">
              <h2>Public repositories</h2>
              <Repos repos={ this.props.repos } />
            </div>
            
          </div>
        </Fragment>
      );
    }
  }
}

export default User;
