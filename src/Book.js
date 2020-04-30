import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ id, shelf, title, authors, imageLinks, onMoveBook }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundImage: imageLinks
              ? `url("${imageLinks.thumbnail}")`
              : 'linear-gradient(45deg, #cccccc, transparent)',
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf || 'none'}
            onChange={(event) =>
              onMoveBook(
                { id, shelf, title, authors, imageLinks },
                event.target.value
              )
            }
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors && authors.map((author) => <div key={author}>{author}</div>)}
      </div>
    </div>
  )
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  imageLinks: PropTypes.object,
  onMoveBook: PropTypes.func.isRequired,
}

export default Book
