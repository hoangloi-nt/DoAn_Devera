import React, { useState, useEffect } from 'react';
import { Button } from 'components/button';
import { Pagination } from 'components/pagination';
import * as request from 'utils/request';
import ReactPaginate from "react-paginate";
import { Card } from "../card";

 
const Category = () => {
  const categories = [
    "Music",
    "Art",
    "Sport",
    "Photography",
    "Virtual Reality",
    "Video",
  ];
  
  const [selectedCategory, setSelectedCategogy] = useState(categories[0]);
  const [productList, setProductList] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await request.get(`products`, {
          params: {
            _limit: itemsPerPage,
            _start: itemOffset,
            Category: selectedCategory,
          },
        });
        setProductList(res);
      } catch (error) {}
    };

    fetchApi();
  }, [itemOffset, selectedCategory]);

    useEffect(() => {
      const countApi = async () => {
        try {
          const res = await request.get(`products/count`, {
            params: {
              _Category: selectedCategory,
            },
          });
          setTotalProducts(res);
        } catch (error) {}
      };
      countApi();
    }, [selectedCategory]);

  useEffect(() => {
    setPageCount(Math.ceil(totalProducts / itemsPerPage));
  }, [totalProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalProducts;
    setItemOffset(newOffset);
  }

  return (
    <>
      <div className="categories flex items-center justify-center text-sm gap-x-10">
        {categories.map((category) => (
          <Button
            kind="secondary"
            height={"34px"}
            key={category}
            active={selectedCategory === category}
            onClick={() => {
              setSelectedCategogy(category);
              setItemOffset(0);
            }}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="my-5">
        <div className={`grid grid-cols-4 mx-auto gap-x-10 gap-y-12`}>
          {productList.map((product) => {
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

        <ReactPaginate
          key={selectedCategory}
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
      </div>
    </>
  );
}

export default Category;