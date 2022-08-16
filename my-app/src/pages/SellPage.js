import React from "react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { TopCreators } from "../components/creator";


const SellPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-[42px]">
        <h1 className="heading-text mb-2 mt-[65px]">Congrats!</h1>
        <Card to={"/"}></Card>
        <p className="my-[24px]">Create success, add to market now!!</p>
        <Button width={"183px"} height={"39px"}>
          Add to market
        </Button>
      </div>
      <div className="justify-center border-t border-t-zinc-400 border-opacity-20 pt-[21px]">
        <TopCreators />
      </div>
    </div>
  );
};

export default SellPage;
