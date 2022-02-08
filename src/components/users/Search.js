import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  onChange = (e) => {
    this.setState({ text: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault();

    if ( this.state.text === '' ) {
      this.props.setAlert('Please enter a name', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
    <div>
      <form className="form" onSubmit={ this.onSubmit }>
        <input
          type="text"
          name="text"
          placeholder="Search users"
          value={ this.state.text }
          onChange={ this.onChange }
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark"
        />
      </form>
      { this.props.showClear && (
        <button className="btn btn-light" onClick={ this.props.clearUsers }>Clear</button>
      )}
    </div>
    );
  }
}

export default Search;
