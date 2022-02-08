import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = (props) => {
  if (props.loading) {
    return <Spinner />
  } else {
    return (
      <div style={ userStyle }>
        { props.users.map(user => (
          <UserItem key={ user.id } user={ user } />
        )) }
      </div>
    );
  }
}

Users.propTypes = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
