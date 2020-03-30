import React from "react";

export const Film = ({ film }) => {
  return (
    <>
      <li>
        {film.name}, {film.author}
      </li>
    </>
  );
};
