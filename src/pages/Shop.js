import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import data from "../data/ProductInfo";

const Shop = () => {
  const [items, setItems] = useState(12);
  const [products, setProducts] = useState(data.slice(0, items));

  useEffect(() => {
    setProducts(data.slice(0, items));
  }, [items]);

  return (
    <div>
      <div className="shop-center">
        {products.map((product, index) => {
          return <Product size="small" pos="" key={index} {...product} />;
        })}
      </div>
      {items !== data.length && (
        <div className="btn-container">
          <div className="btn-center">
            <button
              className="btn-rect"
              onClick={() => {
                let newItems = items + 12;
                if (items > data.length) {
                  newItems = data.length;
                }
                setItems(newItems);
              }}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
