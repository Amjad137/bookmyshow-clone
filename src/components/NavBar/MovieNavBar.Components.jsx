import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

function Nav() {
  return (
    <>
      <div className="flex flex-row bg-darkBackground-700 w-full border-1 border-black p-4 rounded-md gap-5">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="Logo"
            className="h-full w-full"
          />
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3  py-3 rounded-md ">
          <BiSearch />
          <input
            type="search"
            className="bg-transparent w-full   focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}
const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-2/1 gap-3">
          <div className="w-20 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="Logo"
              className="w-full h-full rounded "
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Batticaloa <BiChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white cursor-pointer">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
const MovieNavBar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        <div className="md:hidden">
          <Nav />
        </div>

        <div className="hidden md:flex lg:hidden">
          <Nav />
        </div>

        <div className="hidden w-full lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavBar;
