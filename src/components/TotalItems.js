import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const TotalItems = () => {
  const { items } = useContext(GlobalContext);
  return items.length === 0 ? (
    <div>You have no Items on your list!</div>
  ) : (
    <div>Total Items: {items.length}</div>
  );
};
