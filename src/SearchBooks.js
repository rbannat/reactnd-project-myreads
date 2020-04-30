import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'
import SearchBooksBar from './SearchBooksBar'

const SearchBooks = ({ query, books, onMoveBook, onSearch }) => (
  <div className="search-books">
    <SearchBooksBar value={query} onSearch={onSearch} />
    <div className="search-books-results">
      <BooksGrid books={books} onMoveBook={onMoveBook} />
    </div>
  </div>
)

SearchBooks.propTypes = {
  query: PropTypes.string,
  books: PropTypes.array,
  onMoveBook: PropTypes.func,
  onSearch: PropTypes.func,
}

export default SearchBooks
