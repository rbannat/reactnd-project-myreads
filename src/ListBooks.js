import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const filterBooksByShelfType = (books, shelfType) =>
  books.filter((book) => book.shelf === shelfType)

const ListBooks = ({ books, onMoveBook }) => {
  const currentlyReadingBooks = filterBooksByShelfType(
    books,
    'currentlyReading'
  )
  const readBooks = filterBooksByShelfType(books, 'read')
  const wantToReadBooks = filterBooksByShelfType(books, 'wantToRead')
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            books={currentlyReadingBooks}
            onMoveBook={onMoveBook}
          />
          <BookShelf
            title="Want to Read"
            books={wantToReadBooks}
            onMoveBook={onMoveBook}
          />
          <BookShelf title="Read" books={readBooks} onMoveBook={onMoveBook} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array,
  onMoveBook: PropTypes.func,
}

export default ListBooks
