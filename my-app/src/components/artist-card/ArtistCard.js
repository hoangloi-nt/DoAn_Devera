import { Button } from "components/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { hashShortener } from "sdk/iconSDK";

const artistCard = ({ to, name, address, avatar, products, isYou }) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="front">
          <div className="card w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-y-10">
            <img
              src={
                avatar ||
                "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
              }
              alt=""
              className="object-cover w-[200px] h-[200px] mx-auto rounded-full"
            />

            <div className="leading-none flex justify-center items-center gap-x-3">
              <span className="text-xl font-semibold">{name}</span>
              {isYou && (
                <div className="font-semibold text-white bg-green-500 px-3 py-2 rounded-xl">
                  {t("artistPage.you")}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="back">
          <div className="card w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-y-5">
            <img
              src={
                avatar ||
                "https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
              }
              alt=""
              className="object-cover w-[80px] h-[80px] mx-auto rounded-full"
            />
            <div className=" flex justify-center items-center gap-x-3">
              <span>
                {t("name")}: <strong>{name}</strong> <br></br>
                {t("address")}: <strong>{hashShortener(address)}</strong>{" "}
                <br></br>
                {t("products")}: <strong>{products}</strong> <br></br>
              </span>
            </div>
            <div className="flex justify-center items-center flex-col gap-y-4">
              {isYou && (
                <Button
                  type="button"
                  kind="primary"
                  className="!text-sm"
                  height={"36px"}
                  to={"/profile"}
                >
                  {t("artistPage.updateBtn")}
                </Button>
              )}

              {to && (
                <Button
                  type="button"
                  kind="primary"
                  className="!text-sm"
                  height={"36px"}
                  to={to}
                >
                  {t("artistPage.viewBtn")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default artistCard;
