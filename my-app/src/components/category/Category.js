import React, { useState, useEffect } from 'react';
import { Button } from 'components/button';
import { Pagination } from 'components/pagination';
import axios from 'axios';

 
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

  useEffect(() => {
    axios
      .get("http://localhost:1337/products")
      .then((res) => {
        setProductList(res.data);
      });
  }, []);

 
  return (
    <>
      <div className="categories flex items-center justify-center text-sm gap-x-10">
        {categories.map((category) => (
          <Button
            kind="secondary"
            height={"34px"}
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategogy(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="my-5">
        <Pagination items={productList.filter(products => products.Category === selectedCategory)}></Pagination>
      </div>
    </>
  );
}

export default Category;