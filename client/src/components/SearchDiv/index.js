  
import React from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import SearchForm from "../SearchForm";

function SearchDiv(props) {
  return (
    <div>
      <SearchForm>
        <SearchBar />
        <SearchButton searchBooks={props.searchBooks} />
      </SearchForm>
      <hr />
    </div>
  );
};

export default SearchDiv;