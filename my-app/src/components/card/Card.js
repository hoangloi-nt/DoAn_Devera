import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ to, tittle, image }) => {
  return (
    <NavLink to={to}>
      <div className="w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all">
        <img
          // src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
          src={image}
          alt=""
          className="object-cover w-[222px] h-[222px] mx-auto"
        />
        <div className="mt-5 flex justify-between items-center mx-8">
          <div className="leading-none">
            <span className="text-sm">Crazy Apes</span> <br></br>
            {/* <span className="text-sm">{tittle}</span> <br></br> */}
            <span className="text-xs">
              Created by <strong> hx45...250e</strong>
            </span>
          </div>
          <img
            src="https://www.chuphinhsanpham.vn/wp-content/uploads/2022/02/chup-hinh-cv-profile-hcm-0004.jpg"
            alt=""
            className="rounded-full w-[32px] h-[32px] object-cover"
          />
        </div>
        <div className="mx-7 mt-4 flex gap-2 justify-start items-center">
          <img src="https://i.im.ge/2022/08/07/FR3uFm.Ellipse-6.png" alt="" />
          <span className="text-[10px]">3.90 ICX</span>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
