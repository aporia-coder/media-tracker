import React from "react";
import { AiFillDelete } from "react-icons/ai";

export const Book = ({ book }) => {
  return (
    <>
      <li>
        <p>{book.name}</p>
        <p>{book.author}</p>
        <AiFillDelete />
      </li>
    </>
  );
};
