import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import browney from "../assets/pic.jpg";
import data from "../data/ProductInfo";

const Home = () => {
  const [items, setItems] = useState(6);
  const [images, setImages] = useState(data.slice(0, items));
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setImages(data.slice(0, items));
  }, [items]);
  return (
    <div>
      <div className="hero">
        <img src={browney} alt="hero" className="hero-img" />
        <h1 className="hero-title">
          shop affordable k-beauty and j-beauty products in canada
        </h1>
        <p className="hero-subtitle">Visit us on Instagram!</p>
        <div className="btn-container">
          <div className="btn-center">
            <button
              className="btn-circ"
              onClick={() => {
                window.open("https://www.instagram.com/pifucare/", "_blank");
              }}
            >
              instagram
            </button>
          </div>
        </div>
      </div>
      <Carousel />
      <div className="info">
        <div className="info-text">
          <h2 className="info-heading">who am i</h2>
          <p className="info-subtitle">my story</p>
          <p>
            As an avid lover, user and enthusiast of Asian skincare, mainly
            Korean and Japanese products, I have come to realize through my many
            years of use there are not many sellers within Canada especially not
            within Ontario. My love, passion and interest for skincare plus the
            amount of research I have done regarding products and ingredients
            inspired me to create a business surrounding one of my life's
            passions.
          </p>
          <p>
            The name PifuCare was thought of on a whim but this whim ended up
            being an incredibly clever name for my business. Pifu in Chinese
            means skin, PifuCare literally means skincare, clever right!
          </p>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-container">
          {images.map((object) => {
            return (
              <div className="gallery-img-wrapper">
                <img
                  key={object}
                  className="gallery-img"
                  src={browney}
                  alt={`Gallery ${object}`}
                />
                <div className="gallery-img-cover">
                  <p className="gallery-img-text">wew</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={clicked ? "btn-container clicked" : "btn-container"}>
          <button
            className="btn-rect btn-center"
            onClick={() => {
              setItems(items + 6);
              setClicked(true);
            }}
          >
            load more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
