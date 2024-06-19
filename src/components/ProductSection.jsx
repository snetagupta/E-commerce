import products from "../Data/Product";
import Cards from "./Cards";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
     
      onClick={onClick}>
         <IoIosArrowForward/>
      </div>
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}>
       
        <IoIosArrowBack/>
      </div>
  );
}

const ProductSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      // Check if next slide is the last one
      if (next === products.length - 1) {
        // Hide right arrow
        document.querySelector(".slick-next").style.display = "none";
      } else {
        // Show right arrow
        document.querySelector(".slick-next").style.display = "block";
      }
  
      // Check if next slide is the first one
      if (next === 0) {
        // Hide left arrow
        document.querySelector(".slick-prev").style.display = "none";
      } else {
        // Show left arrow
        document.querySelector(".slick-prev").style.display = "block";
      }
    },
  };
  
  return (
    <>
      <div className="px-20">
        <p className="text-2xl font-semibold mb-4">Dairy, Bread & Eggs</p>
        <Slider {...settings} className="ml-10">
          {products.map((product, index) => (
            <div className="flex items-center justify-between ">
              <ProductCard key={index} product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ProductSection;
