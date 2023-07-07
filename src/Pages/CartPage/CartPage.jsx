import React, { useContext } from "react";
import Cart from "../../Components/Cart/Cart.jsx";
import { mainContext } from "../../Store/MainContext.js";

function CartPage() {
  const mainContextData = useContext(mainContext);

  function closeCartHandler(e) {
    if (e.target.className === "main-page__cart-layer") {
      mainContextData.setOpenCart(false);
    }
  }

  return (
    <div onClick={closeCartHandler} className="main-page__cart-layer">
      <Cart />
    </div>
  );
}

export default CartPage;
