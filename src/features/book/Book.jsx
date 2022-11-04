import { useDispatch } from "react-redux";
import { incrementTotalBooksSaved, addToWishlist } from "./bookSlice";

function Book({ book, allowSaveButton }) {
  const dispatch = useDispatch();

  const updateWishlist = (book) => {
    dispatch(incrementTotalBooksSaved());
    dispatch(addToWishlist(book));
    console.log("clicked");
  };

  return (
    <div className="grid-item">
      <p className="title">{book.title}</p>
      <img
        className="book-img"
        src={book.formats["image/jpeg"]}
        alt={book.title}
      />
      {allowSaveButton ? (
        <button className="save-button" onClick={() => updateWishlist(book)}>
          Save
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Book;
