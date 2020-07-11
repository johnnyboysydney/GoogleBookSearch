import React from "react";

function ResultsCard(props) {
    return (
        <div>
            <div className="row" id={props.title + " Card"}>
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
                    <button className="btn btn-outline-danger btn-sm" id={props.id} onClick={() => props.saveBook(props.id)}><i className="far fa-heart"></i></button>
                </div>
            </div>
            <hr />
        </div>
    );
};

function ResultsWrapper(props) {
    return (props.results.length === 0) ? (
        <div>
           <div id="ResultsWrapper">
               <h1> Search Results </h1>
           </div>
           <hr />
        </div>
    ) : (
            <div id="ResultsWrapper">
                <h1> Search Results </h1>
                <hr />
                {props.results.map((book) => {
                    return (
                        <ResultsCard
                            key={book.id}
                            id={book.id}
                            image={book.image}
                            title={book.title}
                            author={book.authors}
                            description={book.description}
                            link={book.link}
                            saveBook={props.saveBook}
                        />
                    );
                })}
            </div>
        );
};

export default ResultsWrapper;