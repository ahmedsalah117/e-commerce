import React from "react";
import productImg1 from "./../../Utils/images/Rectangle 5052.png";
import productImg2 from "./../../Utils/images/Rectangle 5057 (2).png";
import productImg3 from "./../../Utils/images/Rectangle 5057 (3).png";
import productImg4 from "./../../Utils/images/Rectangle 5052 (2).png";

import ProductItem from "../ProductItem/ProductItem.jsx";
import Slider from "react-slick";

function ProductsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    focusOnSelect: true,
  };

  return (
    <section className="products-carousel">
      <h2 className="text-capitalize m-0"> you may also like</h2>
      <Slider {...settings}>
        <div>
          <h3>
            <ProductItem img={productImg1} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg2} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg3} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg4} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg1} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg2} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg3} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg4} />
          </h3>
        </div>
        <div>
          <h3>
            <ProductItem img={productImg1} />
          </h3>
        </div>
      </Slider>
    </section>
  );
}

export default ProductsCarousel;
