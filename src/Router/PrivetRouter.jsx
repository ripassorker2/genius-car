import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;
