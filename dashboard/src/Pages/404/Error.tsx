import React from "react";
import classes from "./error.module.css";
import logos from "../../Asset/logo";
import { NavLink } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <>
      <div className={classes.main_Error}>
        <h1>Page not Found</h1>
        <div className={classes.img}>
          <img src={logos.notFound} alt="not found" />
        </div>
        <div>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
