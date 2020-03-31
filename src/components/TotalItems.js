import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const TotalItems = () => {
  const { items } = useContext(GlobalContext);
  return items.length === 0 ? (
    <div>You have no Items on your list!</div>
  ) : (
    <div>
      <p style={{ color: "rgb(100, 100, 100)", fontSize: "3rem" }}>
        {items.length}
      </p>
      <p>Total Items:</p>
    </div>
  );
};
