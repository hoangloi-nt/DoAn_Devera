import { Category } from "components/category";
import React, { useEffect } from "react";
import { Button } from "../components/button";

const HomePage = () => {
  useEffect(() => {
    document.title = "Devestore Homepage";
  }, []);
  return (
    <div className="container">
      <div className="flex items-center justify-between mt-10">
        <div>
          <div className="text-5xl font-bold">
            Discover, Sell
            <br></br>& Collect Rare NFTs
          </div>
          <div className="mt-4 mb-10 text-base">
            Digital marketplace for crypto collections and non-fungible tokens
            (NFTs)
          </div>
          <Button kind="primary" height={"56px"} width={"300px"}>
            Discover now
          </Button>
          <div className="flex items-center justify-between mt-10">
            <div>
              <div className="text-5xl font-bold">460 301</div>
              <div>NFTs</div>
            </div>
            <div>
              <div className="text-5xl font-bold">2857</div>
              <div>Artists</div>
            </div>
          </div>
        </div>
        <img src={require("../img/Devera-brand-character-1.png")} alt="" />
      </div>
      <div className="flex items-center justify-end my-10 gap-x-10">
        <img src={require("../img/logo-dark-1.png")} alt="" />
        <img src={require("../img/Devera-logo-red-1.png")} alt="" />
        <img src={require("../img/Lecle-logo-yellow-1.png")} alt="" />
      </div>
      <div className="flex flex-col justify-center border-t border-t-zinc-400 border-opacity-20">
        <div className="my-10 text-xl text-left">Super Hot</div>
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
