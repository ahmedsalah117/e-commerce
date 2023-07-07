import React, { useContext, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import { mainContext } from "../../Store/MainContext.js";

function Layout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <Header />
          <Outlet></Outlet>
        </>
      )}
    </>
  );
}

export default Layout;
