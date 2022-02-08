import React from 'react';
import PropTypes from 'prop-types';

function RepoItem(props) {
  return (
    <div>
      <p><a href={`${ props.link }`} target="_blank" rel="noreferrer">{ props.name }</a></p>
    </div>
  );
}

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string
};

export default RepoItem;
