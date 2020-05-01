import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const filterBooksByShelfType = (books, shelfType) =>
  books.filter((book) => book.shelf === shelfType)

const BookShelf = ({ books, title, type, onMoveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={filterBooksByShelfType(books, type)}
          onMoveBook={onMoveBook}
        />
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onMoveBook: PropTypes.func,
}

export default BookShelf
