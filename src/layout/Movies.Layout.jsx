import React from "react";
import MovieNavBar from "../components/NavBar/MovieNavBar.Components";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavBar />
        <Component {...props} />
        <div>
          <hr />
          <h3 className=" text-center font-light ">
            This is a Clone WebSite of{" "}
            <a
              href="https://lk.bookmyshow.com/sri-lanka"
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
            >
              BookMyShow
            </a>
          </h3>
        </div>
      </div>
    );
  };

export default MovieLayoutHoc;
