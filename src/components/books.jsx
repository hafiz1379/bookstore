import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, category, handleDelete,
  } = props;

  return (
    <div className="bookhead">
      <div className="book-info">

        <p>
          {' '}
          {category || 'Unknown'}
        </p>
        <h3>{title || 'No Title'}</h3>
        <p>
          {' '}
          {author || 'Unknown'}
        </p>
        <div className="booksbuttons">
          <button type="button">Comments</button>
          <hr />
          <button type="button" onClick={handleDelete}>Remove</button>
          <hr />
          <button type="button">Edit</button>

        </div>
      </div>
      <div className="book-container">
        <div className="oval-2" />
      </div>
      <div className="percentage">
        <p>64%</p>
        <p>completed</p>
      </div>
      <hr className="book-hr" />
      <div className="book-last">
        <p>
          CURRENT CHAPTER

        </p>
        <p>
          Introduction
        </p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
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
