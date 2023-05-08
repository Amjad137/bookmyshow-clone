import React from "react";
import NavBar from "../components/NavBar/NavBar.Components";

const DefaultLayoutHoc =
  (Components) =>
  (...props) => {
    return (
      <div>
        <NavBar />
        <Components {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
