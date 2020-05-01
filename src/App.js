import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    query: '',
    searchResults: [],
    shelvedBooks: [],
  }

  componentDidMount = async () => {
    const shelvedBooks = await BooksAPI.getAll()
    this.setState({ shelvedBooks })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.shelvedBooks}
              onMoveBook={this.onMoveBook}
            ></ListBooks>
          )}
        ></Route>
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.getSearchResultsWithState()}
              query={this.state.query}
              onMoveBook={this.onMoveBook}
              onSearch={this.handleOnSearch}
            ></SearchBooks>
          )}
        ></Route>
      </div>
    )
  }

  getSearchResultsWithState = () => {
    return this.state.searchResults.map((book) => {
      const shelvedBook = this.state.shelvedBooks.find(
        (shelvedBook) => shelvedBook.id === book.id
      )
      return shelvedBook ? { ...book, shelf: shelvedBook.shelf } : book
    })
  }

  onMoveBook = async (movedBook, shelf) => {
    BooksAPI.update({ id: movedBook.id }, shelf)
    if (shelf === 'none') {
      this.removeBookFromShelf(movedBook.id)
      return
    }
    const shelvedBook = this.state.shelvedBooks.find(
      (shelvedBook) => shelvedBook.id === movedBook.id
    )
    if (!shelvedBook) {
      this.addBookToShelf({ ...movedBook, shelf })
      return
    }
    this.moveBookToShelf(shelvedBook.id, shelf)
  }

  removeBookFromShelf = (bookId) => {
    this.setState((state) => {
      return {
        shelvedBooks: state.shelvedBooks.filter(
          (shelvedBook) => shelvedBook.id !== bookId
        ),
      }
    })
  }

  addBookToShelf = (movedBook) => {
    this.setState((state) => {
      return {
        shelvedBooks: [...state.shelvedBooks, movedBook],
      }
    })
  }

  moveBookToShelf = (shelvedBookId, shelf) => {
    this.setState((state) => {
      return {
        shelvedBooks: state.shelvedBooks.map((shelvedBook) => {
          if (shelvedBook.id === shelvedBookId) {
            return { ...shelvedBook, shelf }
          }
          return shelvedBook
        }),
      }
    })
  }

  searchBooks = async (query) => {
    this.setState({
      query,
    })
    if (!query.trim()) {
      this.setState({
        searchResults: [],
      })
      return
    }
    const result = await BooksAPI.search(query)
    this.setState(() => ({
      searchResults: !result.error ? result : [],
    }))
  }

  handleOnSearch = (value) => {
    this.searchBooks(value)
  }
}

export default BooksApp
