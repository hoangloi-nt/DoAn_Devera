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
import { useAuth } from "components/contexts/auth-context";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const { show, setShow, nodeRef } = useClickOutSide();
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const { userInfo } = useAuth();

  useEffect(() => {
    async function getPrice() {
      const price = await getBalance(address);
      setPrice(price);
    }
    getPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let language = JSON.parse(localStorage.getItem("language")) || [];
  const disConnectHandle = () => {
    Swal.fire({
      title: t("disconnect-modal.titleDisconnect"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: t("disconnect-modal.noDisconnect"),
      confirmButtonText: t("disconnect-modal.yesDisconnect"),
    }).then((result) => {
      if (result.isConfirmed) {
        disConnect(setAddress);
        navigate("/");
        Swal.fire(
          t("disconnect-modal.disconnect"),
          t("disconnect-modal.textConfirm"),
          "success"
        );
      }
    });
  };

  const handleChangeLanguage = async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          en: "English",
          vn: "Vietnamese",
        });
      }, 500);
    });

    const { value: lang } = await Swal.fire({
      title: "Select language",
      input: "radio",
      inputValue: "en",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });

    if (lang) {
      Swal.fire({
        html: `You selected: ${lang === "en" ? "English" : "Vietnamese"}`,
      });
    }

    i18n.changeLanguage(lang);
    localStorage && localStorage.setItem("language", JSON.stringify(lang));
  };

  const menuLinks = [
    {
      url: "/",
      title: t("explore"),
    },
    {
      url: "/marketplace",
      title: t("marketplace"),
    },
    {
      url: "/artist",
      title: t("artist"),
    },
    {
      url: "/collection",
      title: t("collection"),
    },
  ];

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
          placeholder={t("search")}
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
                src={
                  userInfo.avatar ||
                  "https://vcdn-sohoa.vnecdn.net/2022/03/08/bored-ape-nft-accidental-0-728-5490-8163-1646708401.jpg"
                }
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
              <div className="text-white font-medium">{price} ICX</div>
              {show && (
                <div className="absolute flex justify-center items-start flex-col bg-white w-[200px] rounded-lg overflow-hidden translate-y-2 z-10">
                  <span
                    className="p-3 hover:bg-slate-500 hover:text-white hover:w-full "
                    onClick={handleChangeLanguage}
                  >
                    {t("changeName")}
                  </span>
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full">
                    {t("darkMode")}
                  </span>
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full">
                    <NavLink to={"/create"}>{t("createNFT")}</NavLink>
                  </span>
                  <span className="p-3 hover:bg-slate-500 hover:text-white hover:w-full">
                    <NavLink to={"/profile"}>{t("profile")}</NavLink>
                  </span>
                  <Button
                    kind="primary"
                    className="w-full !rounded-tl-none !rounded-tr-none text-white"
                    onClick={disConnectHandle}
                  >
                    {t("disconnect")}
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
            {t("connect")}
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
