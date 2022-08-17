import { Button } from "components/button";
import { Card } from "components/card";
import { Pagination } from "components/pagination";
import React, { useEffect, useState } from "react";

const Marketplace = () => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/products").then(
      response => response.json().then(data => {
        setProducts(data);
      })
    )
  }, []);
  console.log(products);

  return (
    <div className="container">
      <div className="flex flex-col justify-center border-t border-t-zinc-400 border-opacity-20 my-10 pt-10">
        <div className="flex items-center justify-center text-sm gap-x-10">
          <Button kind="secondary" height={"34px"}>
            Music
          </Button>
          <Button kind="secondary" height={"34px"} active={true}>
            Art
          </Button>
          <Button kind="secondary" height={"34px"}>
            Sport
          </Button>
          <Button kind="secondary" height={"34px"}>
            Photography
          </Button>
          <Button kind="secondary" height={"34px"}>
            Virtual Reality
          </Button>
          <Button kind="secondary" height={"34px"}>
            Video
          </Button>
        </div>
        <div className="my-5">
          <Pagination items={products}></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
