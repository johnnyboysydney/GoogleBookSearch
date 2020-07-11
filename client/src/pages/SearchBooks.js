import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchDiv from "../components/SearchDiv";
import SearchResults from "../components/SearchResults";

class SearchBooks extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };
// Something is broken here --
  searchBooks = (event) => {
    event.preventDefault();
    let searchTerm = document.getElementById("searchbar").value;
    API.getGoogleBookSearch(searchTerm).then((res) => {
      let results = res.data.items;
      results = results.map((result) => {
        let book = {
          id: result.id,
          title: result.volumeInfo.title,
          authors: result.volumeInfo.authors,
          image: result.volumeInfo.imageLinks.thumbnail,
          description: result.volumeInfo.description,
          link: result.volumeInfo.infoLink
        };
        console.log(book) // Testing errors
        return book;
      });
      console.log(results)// Testing errors
      this.setState({ results: results });
    }).catch(err => console.log(err));
  };

  saveBook = (id) => {
    console.log(id)
    console.log(this.state.results)// Testing errors
    let bookSaveChoice = this.state.results.filter((book) => (book.id === id));
    console.log(bookSaveChoice) // Testing errors
    API.saveBook(bookSaveChoice[0])
      .then(console.log(bookSaveChoice[0]))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="text-white">Book Search Powered by Google API</h1>
        </Jumbotron>
        <Container>
          <SearchDiv searchBooks={this.searchBooks} />
          <SearchResults results={this.state.results} saveBook={this.saveBook} />
        </Container>
      </Container>
    );
  }
}

export default SearchBooks;