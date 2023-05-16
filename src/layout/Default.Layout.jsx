import React from "react";
import NavBar from "../components/NavBar/NavBar.Components";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
