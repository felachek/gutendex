import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../features/book/Book";
import "../App.css";

function Home() {
  const [books, setBooks] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  const getData = (url) => {
    axios.get(url).then((response) => {
      setBooks(response.data.results);
      setNextUrl(response.data.next);
      setPreviousUrl(response.data.previous);
    });
  };

  useEffect(() => {
    getData("http://gutendex.com/books");
  }, []);

  return (
    <div className="wrapper">
      <div className="pagination">
        <button
          className="pagination-button"
          disabled={previousUrl === null}
          onClick={() => getData(previousUrl)}
        >
          ⬅️ Previous Page
        </button>

        <button
          className="pagination-button"
          disabled={nextUrl === null}
          onClick={() => getData(nextUrl)}
        >
          Next Page ➡️
        </button>
      </div>
      <div className="grid-container">
        {books.map((book, i) => (
          <Book book={book} key={i} allowSaveButton={true} />
        ))}
      </div>
    </div>
  );
}

export default Home;
