import React, { useContext, useEffect } from "react";
import { mainContext } from "../../Store/MainContext.js";
import CartPage from "../CartPage/CartPage.jsx";

function ContactUs() {
  const mainContextData = useContext(mainContext);
  return (
    <>
      <div className="demo-page">
        <h1>This is the Contact us page</h1>
      </div>
      {mainContextData.openCart ? <CartPage /> : ""}
    </>
  );
}

export default ContactUs;
