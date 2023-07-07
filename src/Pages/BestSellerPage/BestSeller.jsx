import React, { useContext, useEffect } from "react";
import { mainContext } from "../../Store/MainContext.js";
import CartPage from "../CartPage/CartPage.jsx";

function BestSeller() {
  const mainContextData = useContext(mainContext);
  return (
    <>
      <div className="demo-page">
        <h1>This is the bestseller page</h1>
      </div>
      {mainContextData.openCart ? <CartPage /> : ""}
    </>
  );
}

export default BestSeller;
