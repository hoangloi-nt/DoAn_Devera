import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const FooterStyled = styled.div`
  .social-icon img {
    width: 29px;
    height: 29px;
    margin-right: 16px;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const menuLinks = [
    {
      url: "/marketplace",
      title: t("marketplace"),
      subMenuLinks: [
        {
          subUrl: "/",
          subtitle: t("explore"),
        },
        {
          subUrl: "/",
          subtitle: "NFTs",
        },
        {
          subUrl: "/",
          subtitle: t("footer.collectibles"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.vr"),
        },
      ],
    },
    {
      url: "/resources",
      title: t("footer.resources"),
      subMenuLinks: [
        {
          subUrl: "/",
          subtitle: t("footer.help"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.partners"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.blog"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.newsletter"),
        },
      ],
    },
    {
      url: "/company",
      title: t("footer.company"),
      subMenuLinks: [
        {
          subUrl: "/",
          subtitle: t("footer.about"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.careers"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.support"),
        },
        {
          subUrl: "/",
          subtitle: t("footer.newsletter"),
        },
      ],
    },
  ];
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
            {t("footer.footer-text1")}
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
                    key={subMenuLink.subtitle}
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
        <p className="text-sm font-medium text-[#545C71]">
          {t("footer.footer-text2")}
        </p>
        <div className="flex gap-x-8">
          <p className="text-sm font-medium text-[#545C71]">
            {t("footer.footer-text3")}
          </p>
          <p className="text-sm font-medium text-[#545C71]">
            {t("footer.footer-text4")}
          </p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
