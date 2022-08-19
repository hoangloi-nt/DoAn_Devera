import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "../card";

export default function Pagination(props) {
  const { items } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  if (currentItems.length <= itemsPerPage) {
    return (
      <div className="grid grid-cols-4 mx-auto gap-x-10 gap-y-12">
        {currentItems.map((product) => {
          return (
            <Card
              to={"/"}
              tittle={product.Name}
              price={product.Price}
              image={product.image}
              address={product.creators.address}
              creatorAva={product.creators.avatar}
            ></Card>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-4 mx-auto gap-x-10 gap-y-12">
        {currentItems.map((product) => {
          return (
            <Card
              to={"/"}
              tittle={product.Name}
              price={product.Price}
              image={product.Image[0].url}
              creator={product.creators.address}
            ></Card>
          );
        })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex justify-center item-center mb-2 mt-[50px] gap-x-2"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="page-active"
      />
    </>
  );
}
