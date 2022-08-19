import { Button } from "components/button";
import { Card } from "components/card";
import { Category } from "components/category";
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
        <Category />
        <div className="my-5">
          <Pagination items={products}></Pagination>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
