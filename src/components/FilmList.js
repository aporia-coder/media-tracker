import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Film } from "./Film";

export const FilmList = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div className="container-list">
      <ul>
        {items
          .filter(item => item.type === "film")
          .map(film => (
            <Film film={film} />
          ))}
      </ul>
    </div>
  );
};
