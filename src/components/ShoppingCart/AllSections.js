import React from "react";

import ProductCard from "./ProductCard";

const data = [
  {
    id: 1,
    imgSrc: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "womens skirts",
    price: 456,
    cross_price: 800,
  },
  {
    id: 2,
    imgSrc: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "kids Stylish Shirt",
    price: 999,
    cross_price: 1200,
  },
  {
    id: 3,
    imgSrc: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "men Stylish Shirt",
    price: 678,
    cross_price: 1399,
  },

  {
    id: 4,
    imgSrc: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Top",
    price: 230,
    cross_price: 568,
  },
  {
    id: 5,
    imgSrc: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 444,
  },
  {
    id: 6,
    imgSrc: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "men court",
    price: 567,
    cross_price: 1233,
  },
  {
    id: 7,
    imgSrc: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "ladies full dress",
    price: 123,
    cross_price: 193,
  },
  {
    id: 8,
    imgSrc: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Kids wear",
    price: 673,
    cross_price: 1110,
  },
];

const AllSections = () => {
  return (
    <>
      <div className="heading-section">
        <h2 className="decorated">
          <span>Trendy Products</span>
        </h2>
      </div>
      <div className="d-flex flex-wrap p-sm-1 p-xl-5">
        {data.map((item) => (
          <ProductCard key={item.id} productDetails={item} />
        ))}
      </div>
     
      <div className="heading-section">
        <h2 className="decorated">
          <span>Just Arrived</span>
        </h2>
      </div>
      <div className="d-flex flex-wrap p-sm-1 p-lg-5">
        {data.map((item) => (
          <ProductCard key={item.id} productDetails={item} />
        ))}
      </div>
    </>
  );
};

export default AllSections;