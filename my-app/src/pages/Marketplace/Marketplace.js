import { Category } from "components/category";
import { Heading } from "components/heading";
import { Pagination } from "components/pagination";
import React, { useEffect } from "react";

const Marketplace = () => {
  useEffect(() => {
    document.title = "Marketplace";
  }, []);
  return (
    <div className="container">
      <Heading
        title="Marketplace"
        desc="You can view and buy the products on display here."
      ></Heading>
      <div className="flex flex-col justify-center  my-10 pt-10">
        <Category />
      </div>
    </div>
  );
};

export default Marketplace;
