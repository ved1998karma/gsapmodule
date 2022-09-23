import React from "react";
import "./header.css";
import { IoImageOutline, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileModal from "./mobileModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header>
      <div className="header_wrapper container">
        {/* <ul>
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">
              About
            </NavLink>
          </li>
        </ul> */}
        <div className="logo">
          <NavLink to="/">
            <IoImageOutline className="image" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="about">
              Career
            </NavLink>
          </li>
        </ul>

        <IoMenu className="burger-icon" onClick={handleModal} />

        <MobileModal
          className={`${isOpen ? "showModal" : "hideModal"} `}
          onClick={handleModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <div className="hr_gradient"></div>
    </header>
  );
}
