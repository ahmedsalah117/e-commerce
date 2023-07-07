import React, { useContext } from "react";

import { ReactComponent as TrashSVG } from "images/trash.svg";
import { cartContext } from "../../Store/CartContext.js";
function CartItem(props) {
  const cartContextData = useContext(cartContext);
  // function deleteCartItemHandler() {
  //   cartContextData.setCartData(
  //     cartContextData.cartData.filter((ele) => {
  //       return ele.id !== props.key;
  //     })
  //   );
  // }
  return (
    <>
      <div className="cart__product-container">
        <div className="cart__product d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="cart__product__img-holder">
              <img src={props.img} alt="" className="w-100" />
            </div>
            <div className="d-flex flex-column align-items-start  cart__product__details">
              <h5 className="text-uppercase">{props.name}</h5>
              <span className="cart__product__details__size">
                size: {props.size}
              </span>
              <span>color: {props.color}</span>
              <span>{props.price} EGP</span>
            </div>
          </div>
          <div className="trash-icon-container">
            <TrashSVG />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
