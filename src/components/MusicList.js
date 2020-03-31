import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Music } from "./Music";

export const MusicList = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div className="container-list">
      <ul>
        {items
          .filter(item => item.type === "music")
          .map(song => (
            <Music song={song} key={song.id} />
          ))}
      </ul>
    </div>
  );
};
