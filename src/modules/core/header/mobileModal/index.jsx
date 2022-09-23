import React from "react";
import "./mobileModal.css";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function MobileModal({ className, setIsOpen }) {
  return (
    <div className={`${className} mobile-modal`}>
      <div className="container mobile-nav">
        <MdOutlineCancel
          className="cancel-icon"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="mobile-list">
        <NavLink to="/"><h4>Home</h4></NavLink>
        <NavLink to="/about"><h4>About</h4></NavLink>
        <NavLink to="/contact"><h4>Contact</h4></NavLink>
        <NavLink to="/career"><h4>Career</h4></NavLink>
      </div>
    </div>
  );
}
