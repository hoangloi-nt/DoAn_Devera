import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "components/contexts/auth-context";
import { Card } from "components/card";
import { Button } from "components/button";
import { Heading } from "components/heading";
import { Pagination } from "components/pagination";
const Collection = () => {
  const [productList, setProductList] = useState([]);
  const { userInfo } = useAuth();
  const [option, setOption] = useState("create");
  let createProduct = [];
  let buyProduct = [];
  useEffect(() => {
    fetch("http://localhost:1337/products").then((response) =>
      response.json().then((data) => {
        setProductList(data);
      })
    );
  }, []);
  productList.forEach((item) => {
    if (item.createby.id === userInfo.id) {
      createProduct.push(item);
    }
    if (item.boughtby) {
      if (item.boughtby.id === userInfo.id) {
        buyProduct.push(item);
      }
    }
  });
  useEffect(() => {
    document.title = "Collection";
  }, []);
  return (
    <div className="container ">
      <Heading title="Your Collection"></Heading>
      <div className="flex flex-col justify-center my-4 mt-10 ">
        <div className="flex option">
          <Button
            className="mb-6t"
            onClick={() => setOption("create")}
            active={option === "create"}
            kind={"secondary"}
            width="180px"
          >
            Created Product
          </Button>
          <Button
            className="mb-6 ml-10"
            onClick={() => setOption("buy")}
            active={option === "buy"}
            kind={"secondary"}
            width="180px"
          >
            Buy Product
          </Button>
        </div>
        {option === "create" ? (
          createProduct.length !== 0 ? (
            <Pagination items={createProduct}></Pagination>
          ) : (
            <div className="my-12 heading-text">
              You have not created any products yet
            </div>
          )
        ) : buyProduct.length !== 0 ? (
          <Pagination items={buyProduct}></Pagination>
        ) : (
          <div className="my-12 heading-text">
            You have not purchased any products yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
