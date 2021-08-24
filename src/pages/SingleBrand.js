import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import data from "../data/ProductInfo";

const SingleBrand = () => {
  const { name } = useParams();

  const newData = data.filter((product) => product.brand === name);
  const num = Math.min(12, newData.length);

  const [items, setItems] = useState(num);
  const [products, setProducts] = useState(newData.slice(0, items));

  useEffect(() => {
    setProducts(newData.slice(0, items));
  }, [items, newData]);

  return (
    <div>
      <div className="shop-center">
        {products.map((product, index) => {
          return <Product size="small" pos="" key={index} {...product} />;
        })}
      </div>
      {items !== newData.length && (
        <div className="btn-container">
          <div className="btn-center">
            <button
              className="btn-rect"
              onClick={() => {
                let newItems = items + 12;
                if (items > newData.length) {
                  newItems = newData.length;
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

export default SingleBrand;
