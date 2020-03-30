import React from "react";
import { AiFillDelete } from "react-icons/ai";

export const Book = ({ book }) => {
  return (
    <>
      <li>
        {book.name}, {book.author}
      </li>
    </>
  );
};
