import { Category } from "components/category";
import React, { useEffect } from "react";
import { Button } from "../components/button";
import deveraCharacter from "../img/Devera-brand-character-1.png";
import logoIcon from "../img/logo-dark-1.png";
import logoDevera from "../img/Devera-logo-red-1.png";
import logoLecle from "../img/Lecle-logo-yellow-1.png";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const [creators, setCreators] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    async function getAllData() {
      const data = await axios.all([
        axios.get("http://localhost:1337/creators/count"),
        axios.get("http://localhost:1337/products/count"),
      ]);
      setCreators(data[0].data);
      setProducts(data[1].data);
    }
    getAllData();
    document.title = "Devestore Homepage";
  }, []);
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-10">
        <div>
          <div className="text-5xl font-bold">
            {t("homepage.title1")}
            <br></br> {t("homepage.title2")}
          </div>
          <div className="mt-4 mb-10 text-base">{t("homepage.desc")}</div>
          <Button
            kind="primary"
            height={"56px"}
            width={"300px"}
            to={"/marketplace"}
          >
            {t("homepage.mainBtn")}
          </Button>
          <div className="flex items-center gap-x-48 mt-10">
            <div>
              <div className="text-5xl font-bold">{products}</div>
              <div>NFTs</div>
            </div>
            <div>
              <div className="text-5xl font-bold">{creators}</div>
              <div>{t("homepage.artist")}</div>
            </div>
          </div>
        </div>
        <img src={deveraCharacter} alt="Devera Brand Character" />
      </div>
      <div className="flex items-center justify-end my-10 gap-x-10">
        <img src={logoIcon} alt="Icon logo" />
        <img src={logoDevera} alt="Devera logo" />
        <img src={logoLecle} alt="Lecle logo" />
      </div>
      <div className="flex flex-col justify-center border-t border-t-zinc-400 border-opacity-20">
        <div className="my-10 text-xl text-left">{t("homepage.hot")}</div>
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
