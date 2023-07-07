import React from "react";
// import Logo from "../../Components/Logo/Logo.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import logoImg from "./../../Utils/images/logo.png";
function LoadingPage() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="mb-5 w-100 p-3 text-center">
        {/* <Logo classes={"logo"} /> */}
        <img src={logoImg} alt="" className="loading-logo" />
      </div>
      <Loader />
    </div>
  );
}

export default LoadingPage;
