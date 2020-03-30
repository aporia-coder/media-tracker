import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Form = () => {
  const { dispatch } = useContext(GlobalContext);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        type,
        name,
        author,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          onChange={e => {
            setType(e.target.value);
          }}
        >
          <option value="">--Select Type--</option>
          <option value="book">Book</option>
          <option value="film">Film</option>
          <option value="music">Music</option>
        </select>
      </div>
      <div>
        <span>Set Name of Item</span>
        <input
          type="text"
          placeholder="Name of Item"
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <span>Set Author of Item</span>
        <input
          type="text"
          placeholder="Author/Director/Artist"
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
