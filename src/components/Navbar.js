import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { getCorrectWord } from "../helpers/utils";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading list</h1>
      <p>
        Currently you have {books.length} {getCorrectWord(books.length)}{` `}
        to get through
      </p>
    </div>
  );
};

export default Navbar;
