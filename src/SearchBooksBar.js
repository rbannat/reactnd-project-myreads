import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchBooksBar = ({ value, onSearch }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={value}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </div>
  )
}

SearchBooksBar.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
}

export default SearchBooksBar
