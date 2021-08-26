import React, { useState, useEffect } from "react";
import Product from "./Product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "../data/ProductInfo";

const Carousel = () => {
  let products = data;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const endIndex = products.length - 1;
    if (index < 0) {
      setIndex(endIndex);
    }
    if (index > endIndex) {
      setIndex(0);
    }
  }, [index, products.length]);

  return (
    <section className="carousel">
      <div className="carousel-center">
        <div className="arrow-wrapper prev">
          <FaChevronLeft
            className="btn prev"
            onClick={() => {
              setIndex(index - 1);
            }}
          />
        </div>
        <div className="arrow-wrapper next">
          <FaChevronRight
            className="btn next"
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </div>
        {products.map((product, productIndex) => {
          let position = "nextSlide";
          if (productIndex === index % products.length) {
            position = "activeSlide first";
          }
          if (productIndex === (index + 1) % products.length) {
            position = "activeSlide second";
          }
          if (productIndex === (index + 2) % products.length) {
            position = "activeSlide third";
          }
          if (productIndex === (index + 3) % products.length) {
            position = "activeSlide fourth";
          }
          if (
            productIndex === index - 1 ||
            (index === 0 && productIndex === products.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <Product
              key={productIndex}
              size="big"
              pos={position}
              {...product}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
