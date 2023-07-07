import React, { useContext } from "react";
import { mainContext } from "../../Store/MainContext.js";
import CartPage from "../CartPage/CartPage.jsx";

function NewArrival() {
  const mainContextData = useContext(mainContext);
  return (
    <>
      <div className="demo-page">
        <h1>This is the new arrival page</h1>
      </div>
      {mainContextData.openCart ? <CartPage /> : ""}
    </>
  );
}

export default NewArrival;
