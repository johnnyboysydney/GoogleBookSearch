import React from "react";

function SavedCard(props) {
  return (
    <div>
      <div className="row" id={props.id + "Card"}>
        <div className="col-2">
          <img src={props.image} alt={"Image of" + props.title}></img>
        </div>
        <div className="col-9">
          <div className="row">
            <h2 className="col-8">
              {props.title} by {props.author}
            </h2>
          </div>
          <p>
            {props.description}
          </p>
        </div>
        <div className="col-1">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Detail</button>
          </a>
          <button className="btn btn-danger" id={props.id} onClick={(event) => { props.deleteBook(event.target.id) }}>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

function SavedBooks(props) {
  return (props.saved.length === 0) ? (
    <div id="SavedBooks">
      <h1>You have not choosen any book</h1>
    </div>
  ) : (
      <div id="SavedBooks">
        <h1>Your selections</h1>
        <hr />
        {props.saved.map((book) => {
          return (
            <SavedCard
              key={book._id}
              id={book._id}
              image={book.image}
              title={book.title}
              author={book.authors}
              description={book.description}
              link={book.link}
              deleteBook={props.removeBook}
            />
          );
        })}
      </div>
    );
};

export default SavedBooks;