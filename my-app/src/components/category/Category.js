import React, { useState, useEffect } from 'react';
import { Button } from 'components/button';
import { Pagination } from 'components/pagination';

const categories = [
  "Music",
  "Art",
  "Sport",
  "Photography",
  "Virtual Reality",
  "Avatar",
];
 
const Category = () => {
  const [selectedCategory, setSelectedCategogy] = useState(categories[0]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/products").then((response) =>
      response.json().then((data) => {
        setProductList(data);
      })
    );
  }, []);
 
  return (
    <div>
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
    </div>
  );
}

export default Category;