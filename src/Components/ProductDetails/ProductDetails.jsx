import React, { useContext, useState } from "react";
import productImg1 from "./../../Utils/images/Rectangle 5057.png";
import productImg2 from "./../../Utils/images/Rectangle 5057 (1).png";
import productImg3 from "./../../Utils/images/Rectangle 5057 (2).png";
import productImg4 from "./../../Utils/images/Rectangle 5057 (3).png";
import productImgMain from "./../../Utils/images/Rectangle 150.png";
import { ReactComponent as FavIcon } from "images/favIcon.svg";
import { ReactComponent as VideoIcon } from "images/video.svg";
import { ReactComponent as ShareIcon } from "images/share.svg";
import { ReactComponent as RatingSVG } from "images/Group 14396.svg";
import { ReactComponent as HoverSVG } from "images/hover.svg";
import { cartContext } from "../../Store/CartContext.js";
import { mainContext } from "../../Store/MainContext.js";

function ProductDetails() {
  const [productCount, setProductCount] = useState(1);
  const cartContextData = useContext(cartContext);
  const productDetailsData = useContext(mainContext);

  function increaseCountHandler() {
    setProductCount((prevCount) => {
      return ++prevCount;
    });
  }
  function decreaseCountHandler() {
    setProductCount((prevCount) => {
      if (prevCount === 1) return 1;
      return --prevCount;
    });
  }

  function addToCartHandler() {
    cartContextData.setCartCount((prevCount) => {
      return prevCount + productCount;
    });

    cartContextData.setCartData((prevData) => {
      const productsArr = [];
      for (let i = 1; i <= productCount; i++) {
        productsArr.push(productDetailsData.productData);
      }
      return [...prevData, ...productsArr];
    });
  }
  return (
    <section className="m-auto product-details">
      <div className="row m-0">
        <div className="col-md-6  product-details__imgContainer p-0 ">
          <div className="first__img">
            <img
              src={productImg1}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="second__img">
            <img
              src={productImg2}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="third__img">
            <img
              src={productImg3}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="fourth__img">
            <img
              src={productImg4}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          <div className="product-img__main">
            <img
              src={productImgMain}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        <div className="col-md-6 product-details__info p-0">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="m-0 p-0 product-name">
                {productDetailsData.productData.name}
              </h4>
              <span>
                <RatingSVG />
              </span>
            </div>
            <div className="hover-img">
              <HoverSVG />
            </div>
          </div>

          <div className="product-details__price">
            <p>
              3000 EGP &nbsp;{" "}
              <span className="text-decoration-line-through">3560 EGP</span>
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="product-details__size-container">
            <p className="color-sec">size</p>
            <p className="d-flex justify-content-start ">
              <span>2*3 M</span>
              <span>4*4 M</span>
              <span>3*4 M</span>
            </p>
          </div>
          <div className="product-details__color-container">
            <p className="color-sec">color</p>
            <p>
              <span className="bg-white"></span>
              <span className=""></span>
              <span className=""></span>
              <span className=""></span>
            </p>
          </div>
          <div className="product-details__number-container d-flex align-items-center">
            <span className="increase-decrease">
              <span onClick={decreaseCountHandler}>-</span>{" "}
              <span>{productCount}</span>{" "}
              <span onClick={increaseCountHandler}>+</span>
            </span>
            <button
              onClick={addToCartHandler}
              className="text-uppercase btn btn-dark rounded-4 number-control-btn"
            >
              Buy now
            </button>
          </div>
          <div className="product-details__icon-container d-flex align-items-center">
            <span className="icon-container--holder">
              <FavIcon />
            </span>
            <span>add to wishlist</span>
            <span className="icon-container--holder">
              <VideoIcon />
            </span>
            <span>video call</span>
            <span className="icon-container--holder align-items-center">
              <ShareIcon />
            </span>
            <span>share</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
