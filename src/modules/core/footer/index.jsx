import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
import Reachus from "./subFooter";

export default function Footer() {
  const footerLink = [
    {
      linkHeading: "Links heading",
      links: [
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
      ],
    },
    {
      linkHeading: "Links heading",
      links: [
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
      ],
    },
    {
      linkHeading: "Links heading",
      links: [
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
      ],
    },
    {
      linkHeading: "Links heading",
      links: [
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
      ],
    },
    {
      linkHeading: "Links heading",
      links: [
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
        {
          linkTitle: "links",
          link: "/",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="footer-wrapper blade-padding-sm container">
        <div className="">
          <Reachus />
          <div className="footer-links-wrapper  blade-margin-sm ">
            {footerLink.map((item, index) => {
              return (
                <ul>
                  <li>{item.linkHeading}</li>
                  {item.links.map((item, index) => {
                    return (
                      <li>
                        <Link to={item.link}>{item.linkTitle}</Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-ribbon container">
        <h5 className="color-white font-A ">Copyright</h5>
        <div className="social-wrapper">
          <a href="">
            <FaFacebookF className="social-links" />
          </a>
          <a href="">
            <FaInstagram className="social-links" />
          </a>
          <a href="">
            <FaTwitter className="social-links" />
          </a>
          <a href="">
            <FaLinkedinIn className="social-links" />
          </a>
        </div>
      </div>
    </footer>
  );
}
