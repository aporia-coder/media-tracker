import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Film } from "./Film";

export const FilmList = () => {
  const { items } = useContext(GlobalContext);
  return (
    <ul>
      {items
        .filter(item => item.type === "film")
        .map(film => (
          <Film film={film} />
        ))}
    </ul>
  );
};
