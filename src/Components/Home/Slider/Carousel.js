import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./Imagse/slider1.jpg";
import img2 from "./Imagse/slider2.jpg";
import img3 from "./Imagse/slider3.jpg";
import img4 from "./Imagse/slider4.jpg";
import img5 from "./Imagse/slider5.jpg";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
  };
  return (
    <Slider {...settings} className="carousel p-0 m-0">
      <div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={img2} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={img4} alt="" />
        </div>
      </div>
      <div>
        <div>
          <img src={img5} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
