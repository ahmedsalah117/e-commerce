import React, { useContext, useEffect } from "react";
import { mainContext } from "./../../Store/MainContext";
import CartPage from "../CartPage/CartPage.jsx";

function AboutUs() {
  const mainContextData = useContext(mainContext);
  return (
    <>
      <div className="demo-page">
        <h1>This is the about us page</h1>
      </div>
      {mainContextData.openCart ? <CartPage /> : ""}
    </>
  );
}

export default AboutUs;
