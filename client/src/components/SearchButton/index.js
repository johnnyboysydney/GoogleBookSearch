import React from "react";

function SearchButton(props) {
  return (

    <div className="form-group row mt-2 mx-auto">
      <div className="col-12">
        <button type="submit" className="btn btn-secondary" id="searchbutton" onClick={(event) => props.searchBooks(event)}>Search Books</button>
      </div>
    </div>
  );
}

export default SearchButton;