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
          <h2 className="text-center text-gray-600 font-light mb-10">
            As a developer, Hereby I would like to inform you that I won't be
            Responsible for the Images that are shown on this website. All the
            images are fetched using "The Movie database" API.
          </h2>
        </div>
      </div>
    );
  };

export default MovieLayoutHoc;
