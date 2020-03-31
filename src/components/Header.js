import React from "react";
import { TotalItems } from "./TotalItems";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <p style={{ marginLeft: "20px" }}>
          Your
          <br /> Items
        </p>
      </div>
      <div className="header-right">
        <TotalItems />
      </div>
    </div>
  );
};
