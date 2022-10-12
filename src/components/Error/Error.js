import React from "react";
import { useRouteError } from "react-router-dom";
import img4 from "./../../Images/160-1608523_error404-404-error-icon-png-transparent-png.png";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center">
      <img className=" w-1/2" src={img4} alt="" />
    </div>
  );
};

export default Error;
