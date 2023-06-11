import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here</h3>
          <span className="text-xs text-gray-400 flex items-center cursor-pointer hover:text-white">
            Batticaloa <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-10 h-10">
        <img src="" alt="Logo" className="h-full w-full" />
      </div>
      <div className="w-full flex items-center bg-white gap-3 px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="bg-transparent w-full border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex w-2/1 gap-3 items-center">
          <div className="w-20 h-10 px-3 ">
            <img
              // src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="Logo"
              className="w-full h-full rounded-md"
            />
          </div>

          <div className="w-full h-8 flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/plays">
            <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
              Plays
            </span>
          </Link>

          <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
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
}
const NavBar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        <div className="md:hidden">
          <NavSm />
        </div>

        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>

        <div className="hidden md:hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
