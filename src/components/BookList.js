import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Book } from "./Book";

export const BookList = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div>
      <ul>
        {items
          .filter(item => item.type === "book")
          .map(book => (
            <Book book={book} key={book.id} />
          ))}
      </ul>
    </div>
  );
};
