import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import RepoItem from './RepoItem';

const Repos = (props) => {
  if (props.loading) {
    return <Spinner />
  } else {
    return (
      <div className="grid-3">
        { props.repos.map(repo => (
          <RepoItem key={ repo.id } name={ repo.name } link={ repo.html_url } />
        )) }
      </div>
    );
  }
}

// Repos.propTypes = {
//   repos: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// }

export default Repos;