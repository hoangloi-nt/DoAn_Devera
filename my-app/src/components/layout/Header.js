import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../button";

const menuLinks = [
  {
    url: "/",
    title: "Explore",
  },
  {
    url: "/marketplace",
    title: "Marketplace",
  },
  {
    url: "/artist",
    title: "Artist",
  },
  {
    url: "/collection",
    title: "Collection",
  },
];

const Header = () => {
  return (
    <header className="!py-5 container flex items-center gap-x-10">
      <NavLink to="/">
        <img srcSet="/Logo.png 2x" alt="devestore" className="logo" />
      </NavLink>
      <ul className="menu flex items-center justify-center gap-x-10 transition-all">
        {menuLinks.map((item) => (
          <li className="" key={item.title}>
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                isActive ? "text-bold" : "hover:opacity-75"
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="relative flex items-center mx-5">
        <input
          type="text"
          placeholder="Search..."
          className=" py-3 pl-3 pr-10 bg-background rounded-lg border border-white flex-1 w-[300px]"
        />
        <span className="absolute cursor-pointer right-0 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
      </div>
      <Button kind="primary" className="flex-1">
        Connect
      </Button>
    </header>
  );
};

export default Header;
