import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, category, handleDelete,
  } = props;

  return (
    <div>
      <h3>{title || 'No Title'}</h3>
      <p>
        Author:
        {' '}
        {author || 'Unknown'}
      </p>
      <p>
        Category:
        {' '}
        {category || 'Unknown'}
      </p>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,

};

Book.defaultProps = {
  title: '',
  author: '',
  category: '',
};

export default Book;
