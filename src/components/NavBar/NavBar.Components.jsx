import React from "react";
import { BiChevronDown, Bimenu, BiSearch } from "react-icons/bi";

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
        <div className="w-1/2 flex items-center gap-3"></div>
        <div className="w-10 h-10">
          <img src="" alt="Logo" className="w-full h-full" />
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
    </>
  );
}
const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
      <NavLg />
      <NavMd />
      <NavSm />
    </>
  );
};

export default NavBar;
