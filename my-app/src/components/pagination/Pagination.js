import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "../card";

export default function Pagination(props) {
  const { items, className = "", amount } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = amount || 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const Product = () => {
    return (
      <div
        className={`grid grid-cols-4 mx-auto gap-x-10 gap-y-12 ${className}`}
      >
        {currentItems.map((product) => {
          return (
            <Card
              key={product.id}
              to={`/buy/${product.id}`}
              title={product?.Name}
              price={product?.Price}
              image={product?.image}
              address={product?.createby?.address}
              avatar={product?.createby?.avatar}
            ></Card>
          );
        })}
      </div>
    );
  };

  if (items.length <= itemsPerPage) {
    return <Product />;
  }

  // const { items, totalProducts, className = "", amount } = props;
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = amount;

  //  useEffect(() => {
  //    setPageCount(Math.ceil(totalProducts / itemsPerPage));
  //  }, [itemsPerPage, totalProducts, itemOffset]);

  //  const handlePageClick = (event) => {
  //    const newOffset = (event.selected * itemsPerPage) % totalProducts;
  //    setItemOffset(newOffset);
  //  };

  // const Product = () => {
  //   return (
  //     <div
  //       className={`grid grid-cols-4 mx-auto gap-x-10 gap-y-12 ${className}`}
  //     >
  //       {items.map((product) => {
  //         return (
  //           <Card
  //             key={product.id}
  //             to={`/buy/${product.id}`}
  //             title={product?.Name}
  //             price={product?.Price}
  //             image={product?.image}
  //             address={product?.createby?.address}
  //             avatar={product?.createby?.avatar}
  //           ></Card>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  // if (items.length <= itemsPerPage) {
  //   return <Product />;
  // }


  return (
    <>
      <Product />

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
