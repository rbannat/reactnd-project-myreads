import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const ListBooks = ({ books, onMoveBook }) => {
  const shelves = [
    { title: 'Currently Reading', type: 'currentlyReading' },
    { title: 'Want to Read', type: 'wantToRead' },
    { title: 'Read', type: 'read' },
  ]
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <BookShelf
              title={shelf.title}
              type={shelf.type}
              books={books}
              onMoveBook={onMoveBook}
            />
          ))}
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
