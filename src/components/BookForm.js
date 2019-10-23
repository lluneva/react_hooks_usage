import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { InputButton, InputText } from "../styledComponents/Input";
import ButtonsWrapper from "../styledComponents/ButtonsWrapper";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [bookValues, setBookValues] = useState({ title: "", author: "" });

  const handleInputChange = e => {
    setBookValues({ ...bookValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, author } = bookValues;
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setBookValues({ title: "", author: "" });
  };

  const handleBookRemoval = () => {
    dispatch({ type: "REMOVE_ALL_BOOKS" });
    setBookValues({ title: "", author: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputText
        // type='text'
        placeholder='book title'
        name='title'
        value={bookValues.title}
        onChange={handleInputChange}
        required
      />
      <InputText
        type='text'
        placeholder='book author'
        name='author'
        value={bookValues.author}
        onChange={handleInputChange}
        required
      />
      <ButtonsWrapper>
        <InputButton primary type='submit' value='add book' />
        <InputButton type='button' value='remove all books' onClick={handleBookRemoval} />
      </ButtonsWrapper>
    </form>
  );
};

export default BookForm;
