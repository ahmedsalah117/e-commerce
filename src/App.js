import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage.jsx";
import LoadingPage from "./Pages/LoadingPage/LoadingPage.jsx";
import MainPage from "./Pages/MainPage/MainPage.jsx";
import BestSeller from "./Pages/BestSellerPage/BestSeller.jsx";
import NewArrival from "./Pages/NewArrivalPage/NewArrival.jsx";
import AboutUs from "./Pages/AboutUsPage/AboutUs.jsx";
import ContactUs from "./Pages/ContactUSPage/ContactUs.jsx";
import Layout from "./Pages/Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import { useContext, useEffect } from "react";
import { mainContext } from "./Store/MainContext";

function App() {
  const mainContextData = useContext(mainContext);
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        {
          path: "/bestseller",
          element: <BestSeller />,
        },
        {
          path: "/newarrival",
          element: <NewArrival />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
          loader: () => {
            return null;
          },
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  //Forcing a loading screen for 3 seconds.
  useEffect(() => {
    setTimeout(() => {
      mainContextData.setIsLoading(false);
    }, 2000);
  }, []);

  return mainContextData.isLoading ? (
    <LoadingPage />
  ) : (
    <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
