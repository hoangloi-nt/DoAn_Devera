import { Category } from "components/category";
import { Pagination } from "components/pagination";
import React, { useEffect, useState } from "react";

const Marketplace = () => {

  return (
    <div className="container">
      <div className="flex flex-col justify-center border-t border-t-zinc-400 border-opacity-20 my-10 pt-10">
        <Category />
      </div>
    </div>
  );
};

export default Marketplace;
