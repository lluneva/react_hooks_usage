import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { getCorrectWord } from '../../helpers/utils';
import HeaderText from '../../commonStyles/HeaderText';

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <HeaderText Modak>Reading list</HeaderText>
      <p>
        Currently you have {books.length} {getCorrectWord(books.length)}
        {` `}
        to get through
        {books.length === 0 && <span>. I guess you have some free time then. </span>}
      </p>
    </div>
  );
};

export default Navbar;
