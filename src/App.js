import React, { Component } from 'react';
import { connect } from "react-redux";
import { setBooks } from './actions/books';
import books from './books';
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    axios.get('/books.json').then(response => {
      setBooks(response.data);
    })
  }

  render() {
    const {isReady} = this.props;
    return(
        <ul>
          {
            !isReady ?
              books.map(book => (
                  <li key={book.id}><b>{book.title}</b> - {book.author}</li>
              ))
            : 'Загрузка...'
          }
        </ul>
    )
  }
}

const  mapStateToProps = (books) => ({
  books: books.items,
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)