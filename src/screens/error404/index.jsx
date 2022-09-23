import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../modules/atoms";
import "./error.css";

export default function Error404Screen() {
  return (
    <div className="errorScreenWrapper">
      <h3>Error 404 Screen</h3>
      <NavLink to="/" className="p-1 m-2 br-2 rounded-sm">Go to Homepage</NavLink>
    </div>
  );
}
