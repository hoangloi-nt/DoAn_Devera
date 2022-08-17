import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../button";
import {
  connectWallet,
  hashShortener,
  disConnect,
  getBalance,
} from "../../sdk/iconSDK.js";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useEffect } from "react";

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
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const { show, setShow, nodeRef } = useClickOutSide();
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getPrice() {
      const price = await getBalance(address);
      setPrice(price);
    }
    getPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div>
        {address ? (
          <div className="flex justify-center items-center gap-x-3">
            <div className="avatar w-10 h-10">
              <img
                src="https://vcdn-sohoa.vnecdn.net/2022/03/08/bored-ape-nft-accidental-0-728-5490-8163-1646708401.jpg"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <span
              className="text-gray-400 cursor-pointer relative"
              onClick={() => setShow(!show)}
              ref={nodeRef}
            >
              {hashShortener(address)}
              <p className="text-white font-medium">{price} ICX</p>
              {show && (
                <div className="absolute flex justify-center items-start flex-col bg-white w-[200px] rounded-lg overflow-hidden translate-y-2">
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full ">
                    Change language
                  </span>
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full">
                    Dark mode
                  </span>
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full">
                    <NavLink to={"/create"}>Create NFT</NavLink>
                  </span>
                  <Button
                    kind="primary"
                    className="w-full !rounded-tl-none !rounded-tr-none text-white"
                    onClick={() => {
                      disConnect(setAddress);
                      navigate("/");
                    }}
                  >
                    Disconnect
                  </Button>
                </div>
              )}
            </span>
          </div>
        ) : (
          <Button
            kind="primary"
            className="w-[200px]"
            onClick={() => connectWallet(setAddress)}
          >
            Connect
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
