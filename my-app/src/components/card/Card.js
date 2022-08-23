import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { hashShortener } from "sdk/iconSDK";

const Card = ({ to, title, image, price, address, avatar }) => {

  const { t } = useTranslation();
  return (
    <NavLink to={to}>
      <div className="card w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all">
        <img
          src={
            image ||
            "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
          }
          alt=""
          className="object-cover w-[222px] h-[222px] mx-auto"
        />
        <div className="mt-5 flex justify-between items-center mx-8">
          <div className="leading-none">
            <span className="text-sm">{title}</span> <br></br>
            <span className="text-xs">
              {t("created")} <strong> {hashShortener(address)}</strong>
            </span>
          </div>
          <img
            src={
              avatar ||
              "https://www.chuphinhsanpham.vn/wp-content/uploads/2022/02/chup-hinh-cv-profile-hcm-0004.jpg"
            }
            alt=""
            className="rounded-full w-[32px] h-[32px] object-cover"
          />
        </div>
        <div className="mx-7 mt-4 flex gap-2 justify-start items-center">
          <img src="https://i.im.ge/2022/08/07/FR3uFm.Ellipse-6.png" alt="" />
          <span className="text-[10px]">{price} ICX</span>
        </div>
      </div>
    </NavLink>
  );

};

export default Card;
