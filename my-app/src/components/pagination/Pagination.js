import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "../card";

export default function Pagination(props) {
  const { items } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 gap-y-12 mx-auto">
        {currentItems.map((card) => {
          return (
            // <div>
            //   <img src={card.image} alt={card.title} />
            // </div>

            <Card to={"/"} image={card.image}></Card>
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
        containerClassName="pagination flex justify-center item-center mb-2 gap-x-2"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="page-active"
      />
    </>
  );
}
