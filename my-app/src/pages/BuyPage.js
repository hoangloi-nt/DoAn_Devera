import React from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { NavLink } from "react-router-dom";
const BuyPage = () => {
  console.log('buy page')
  return <div className="container " >
      <div className="flex flex-col items-center justify-center mt-3">
        <div className="mb-4 heading-text">Buy now!</div>
        <Card to={"/"}></Card>
        <div className="my-6 message-text">Hurry up, you will be late!</div>
        <Button kind="primary" width={"183px"}>Buy</Button>
      </div>
      <div className="my-4 flex flex-col justify-center">
        <div className="mb-6 text-left heading-text">Move from this user</div>
        <div className="grid grid-cols-4 mx-auto gap-x-10">
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
          <Card to={"/"}></Card>
        </div>
        <NavLink className={"text-right my-3"} to={"/"}>View all... </NavLink>
      </div>
  </div>;
};

export default BuyPage;
