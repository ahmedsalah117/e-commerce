import React, { useContext } from "react";
import { mainContext } from "../../Store/MainContext.js";
import CartPage from "../CartPage/CartPage.jsx";
function ErrorPage() {
  const mainContextData = useContext(mainContext);
  return (
    <>
      <div className="text-uppercase demo-page">
        <h1>404 We Do not have this page</h1>
      </div>
      {mainContextData.openCart ? <CartPage /> : ""}
    </>
  );
}

export default ErrorPage;
