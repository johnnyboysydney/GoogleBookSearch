import React from "react";

function SearchForm({ children }) {
  return (
    <div className="container">
      <form className="form-inline">
        {children}
      </form>
    </div>
  );
}

export default SearchForm;