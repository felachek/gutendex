import { store } from "../app/store";
import Book from "../features/book/Book";
import "../App.css";

function Wishlist() {
  const data = store.getState().wishlist;

  if (data.length > 0) {
    return (
      <div className="wrapper">
        <div className="grid-container">
          {data.map((book, i) => (
            <Book book={book} key={i} allowSaveButton={false} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="wrapper">No books have been saved</div>;
  }
}

export default Wishlist;
