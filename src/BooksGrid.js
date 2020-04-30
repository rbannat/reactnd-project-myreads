import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = ({ books, onMoveBook }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book
            id={book.id}
            title={book.title}
            shelf={book.shelf}
            authors={book.authors}
            imageLinks={book.imageLinks}
            onMoveBook={onMoveBook}
          />
        </li>
      ))}
    </ol>
  )
}

BooksGrid.propTypes = {
  books: PropTypes.array,
  onMoveBook: PropTypes.func,
}

export default BooksGrid
