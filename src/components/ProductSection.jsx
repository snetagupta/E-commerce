import React, { useRef, useEffect } from "react";
import products from "../Data/Product";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    beforeChange: (current, next) => {
      // Check if next slide is the last one
      if (next === products.length - 1) {
        // Hide right arrow
        document.querySelector(".custom-next").style.display = "none";
      } else {
        // Show right arrow
        document.querySelector(".custom-next").style.display = "block";
      }

      // Check if next slide is the first one
      if (next === 0) {
        // Hide left arrow
        document.querySelector(".custom-prev").style.display = "none";
      } else {
        // Show left arrow
        document.querySelector(".custom-prev").style.display = "block";
      }
    },
  };

  useEffect(() => {
    document.querySelector(".custom-prev").style.display = "none";
  }, []);

  return (
    <div className="px-20">
      <p className="text-2xl font-semibold mb-4">Dairy, Bread & Eggs</p>
      <div className="relative">
        <button
          className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <IoIosArrowForward size={24} />
        </button>
        <Slider ref={sliderRef} {...settings} >
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSection;
