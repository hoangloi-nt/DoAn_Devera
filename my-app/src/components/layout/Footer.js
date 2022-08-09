import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const FooterStyled = styled.div`
  .social-icon img {
    width: 29px;
    height: 29px;
    margin-right: 16px;
  }
`;
const menuLinks = [
  {
    url: "/marketplace",
    title: "Marketplace",
    subMenuLinks: [
      {
        subUrl: "/",
        subtitle: "Explore",
      },
      {
        subUrl: "/",
        subtitle: "NFTs",
      },
      {
        subUrl: "/",
        subtitle: "Collectibles",
      },
      {
        subUrl: "/",
        subtitle: "Virtual Reality",
      },
    ],
  },
  {
    url: "/resources",
    title: "Resources",
    subMenuLinks: [
      {
        subUrl: "/",
        subtitle: "Help Center",
      },
      {
        subUrl: "/",
        subtitle: "Partners",
      },
      {
        subUrl: "/",
        subtitle: "Blog",
      },
      {
        subUrl: "/",
        subtitle: "Newsletter",
      },
    ],
  },
  {
    url: "/company",
    title: "Company",
    subMenuLinks: [
      {
        subUrl: "/",
        subtitle: "About Us",
      },
      {
        subUrl: "/",
        subtitle: "Careers",
      },
      {
        subUrl: "/",
        subtitle: "Support",
      },
      {
        subUrl: "/",
        subtitle: "Newsletter",
      },
    ],
  },
];

const Footer = () => {
  return (
    <FooterStyled className="!py-5 container">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <NavLink to="/">
            <img
              srcSet="/Logo.png 1.5x"
              alt="devestore"
              className=" mb-2.5 logo"
            />
          </NavLink>
          <div className="mb-6 text-base font-base" style={{ maxWidth: 400 }}>
            Amazing NFTs marketplace, Authentic and unique digital creation.
          </div>
          <div className="flex social-icon ">
            <img alt="facebook" src={require("../../img/facebook.png")} />
            <img alt="youtube" src={require("../../img/youtube.png")} />
            <img alt="twitter" src={require("../../img/twitter.png")} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-10">
          {menuLinks.map((menuLink) => (
            <div
              key={menuLink.title}
              className="flex flex-col items-center justify-center"
            >
              <NavLink to={menuLink.url} className="mb-3 text-xl font-bold">
                {menuLink.title}
              </NavLink>
              <div className="flex flex-col items-center justify-center">
                {menuLink.subMenuLinks.map((subMenuLink) => (
                  <NavLink
                    key={subMenuLink.title}
                    to={subMenuLink.subUrl}
                    className="mb-1 text-base font-normal"
                  >
                    {subMenuLink.subtitle}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 ">
        <p className="text-sm font-medium text-[#545C71]">Copyright 2022 Devera, All right reserved.</p>
        <div className="flex gap-x-8">
          <p className="text-sm font-medium text-[#545C71]">Privacy Policy</p>
          <p className="text-sm font-medium text-[#545C71]">Terms & Conditions</p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
