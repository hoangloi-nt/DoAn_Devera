import React from "react";
import { NavLink } from "react-router-dom";

const Creator = ({ to }) => {
    return (
      <NavLink to={to}>
        <div className="w-[294px] h-[63px] bg-bg_card rounded-[5px] flex items-center px-[9px] justify-between">
          <div className="flex flex-row items-center gap-[7px]">
            <img
              src="https://img.freepik.com/free-vector/three-shiba-inu-characters-scene_603843-3529.jpg?w=900&t=st=1660201551~exp=1660202151~hmac=4c6fa00c801eece858778d622159c6ba4c235565e7cd329c0ed414edaec5699f"
              alt=""
              className="w-[70px] h-[45px] rounded-[5px] object-cover"
            />
            <div className="flex flex-col">
              <span className="text-[8px] font-medium">hx4568...42b35e</span>
              <div className="flex gap-2 justify-start items-center">
                <img
                  src="https://i.im.ge/2022/08/07/FR3uFm.Ellipse-6.png"
                  alt=""
                />
                <span className="text-[8px] font-medium">3.90 ICX</span>
              </div>
            </div>
          </div>

          <span>...</span>
        </div>
      </NavLink>
    );
}

export default Creator;