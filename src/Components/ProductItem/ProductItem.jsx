import React from "react";

import hoverIcon from "./../../Utils/images/hover.png";
import starsIcon from "./../../Utils/images/Group 14396.png";

function ProductItem(props) {
  return (
    <section className="product-item my-5">
      <div className="product-item__img-container">
        <img src={props.img} alt="product img" className="w-100" />
        <img src={hoverIcon} alt="360deg img" className="hover-img w-25" />
      </div>
      <div className="product-item__product-details">
        <h5>lorem</h5>
        <p className="m-0">
          Lorem ipsum dolor sit amet, cons-<br></br>ectetur adipiscing elit. Id
          nisi faucibus vitae odio. Amet mauris convallis amet, id sed.
        </p>
      </div>
      <div>
        <img src={starsIcon} alt="stars icon" />
        <span className="d-block product-item__price">300 EGP</span>
      </div>
      <div className="product-item__cart-btn-holder">
        <button className="btn btn-dark">ADD TO CART</button>
        <span className="text-center">
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
    </section>
  );
}

export default ProductItem;
