import React, { Suspense, useContext, lazy } from "react";
import ProductDetails from "../../Components/ProductDetails/ProductDetails.jsx";
import CartPage from "../CartPage/CartPage.jsx";
import { mainContext } from "../../Store/MainContext.js";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

// implementing lazy loading
const LazyComponent = lazy(() =>
  import("./../../Components/ProductsCarousel/ProductsCarousel.jsx")
);
function MainPage() {
  const mainContextData = useContext(mainContext);

  return (
    <section className="main-page">
      <ProductDetails />

      <Suspense fallback={<LoadingPage />}>
        <LazyComponent />
      </Suspense>
      {mainContextData.openCart ? <CartPage /> : ""}
    </section>
  );
}

export default MainPage;
