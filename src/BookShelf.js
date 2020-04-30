import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = ({ books, title, onMoveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} onMoveBook={onMoveBook} />
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string.isRequired,
  onMoveBook: PropTypes.func,
}

export default BookShelf
