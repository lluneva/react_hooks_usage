import React from "react"
import BookContextProvider from "../contexts/BookContext"
import Navbar from "./Navbar"
import BookList from "./BookList"
import BookForm from "./BookForm";
import { SectionWrapper } from "../App"

const BookListSection = () => {
  return (
    <SectionWrapper>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </SectionWrapper>
  )
}

export default BookListSection
