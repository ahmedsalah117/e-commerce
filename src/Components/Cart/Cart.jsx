import React, { useContext } from "react";
import { cartContext } from "../../Store/CartContext.js";
import CartItem from "../CartItem/CartItem.jsx";
import { mainContext } from "./../../Store/MainContext";

function Cart() {
  const cartContextData = useContext(cartContext);
  const mainContextData = useContext(mainContext);
  const totalPrice = cartContextData.cartData.reduce((prevVal, curVal) => {
    prevVal += curVal.price;
    return prevVal;
  }, 0);

  function closeCartHandler() {
    mainContextData.setOpenCart(false);
  }

  return (
    <>
      <section className="cart">
        <div className="cart__heading d-flex justify-content-between">
          <span className="text-uppercase">
            My Cart ({cartContextData.cartCount})
          </span>
          <span onClick={closeCartHandler}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        {cartContextData.cartData.map((prod) => {
          return (
            <CartItem
              key={prod.id}
              name={prod.name}
              img={prod.img}
              color={prod.color}
              size={prod.size}
              price={prod.price}
            />
          );
        })}

        <div className="cart-price d-flex justify-content-between">
          <span>Sub Total</span>
          <span className="color-sec">{totalPrice} EGP</span>
        </div>
        <div className="cart-btn">
          <button className="text-uppercase btn btn-dark">Go to cart</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
