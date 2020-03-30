import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Music } from "./Music";

export const MusicList = () => {
  const { items } = useContext(GlobalContext);
  return (
    <ul>
      {items
        .filter(item => item.type === "music")
        .map(song => (
          <Music song={song} key={song.id} />
        ))}
    </ul>
  );
};
