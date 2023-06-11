import React from "react";
import NavBar from "../components/NavBar/NavBar.Components";

const DefaultLayoutHoc =
  (
    Component //passing the component as a parameter
  ) =>
  ({ ...props }) => {
    return (
      <div>
        <NavBar />
        <Component {...props} />{" "}
        {/* wrapping the component received as the parameter with navbar and footer,as the component is in the middle,the navbar comes at the top and the footer comes in the down*/}
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

export default DefaultLayoutHoc;
