import React from "react";
import { Link } from "react-router-dom";
export const SwitchList = () => {
  return (
    <div>
      <Link to="/books" className="link">
        Books
      </Link>
      <Link to="/films" className="link">
        Films
      </Link>
      <Link to="/music" className="link">
        Music
      </Link>
    </div>
  );
};
