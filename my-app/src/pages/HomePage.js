import React from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";

const HomePage = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center mt-10">
        <div>
          <div className="text-5xl font-bold">
            Discover, Sell
            <br></br>& Collect Rare NFTs
          </div>
          <div className="text-base mt-4 mb-10">
            Digital marketplace for crypto collections and non-fungible tokens
            (NFTs)
          </div>
          <Button kind="primary" height={"56px"} width={"300px"}>
            Discover now
          </Button>
          <div className="mt-10 flex justify-between items-center">
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
      <div className="flex justify-end items-center gap-x-10 my-10">
        <img src={require("../img/logo-dark-1.png")} alt="" />
        <img src={require("../img/Devera-logo-red-1.png")} alt="" />
        <img src={require("../img/Lecle-logo-yellow-1.png")} alt="" />
      </div>
      <div className="flex justify-center flex-col p-10 border-t border-t-zinc-400 border-opacity-20">
        <div className="text-xl text-left my-10 ml-10">Super Hot</div>
        <div className="gap-x-8 flex justify-center items-center text-sm">
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
          <Button kind="secondary" height={"34px"} active={true}>
            Virtual Reality
          </Button>
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 mx-auto">
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
