import React from "react";

function Logo(props) {
  const logoClass = props.classes;

  return (
    <>
      <div className={`${logoClass} p-3 text-center`}>
        <h4 className="">ABDOU MOSTAFA</h4>
      </div>
    </>
  );
}

export default Logo;
