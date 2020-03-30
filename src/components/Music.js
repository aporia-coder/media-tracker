import React from "react";

export const Music = ({ song }) => {
  return (
    <>
      <li>
        {song.name}, {song.author}
      </li>
    </>
  );
};
