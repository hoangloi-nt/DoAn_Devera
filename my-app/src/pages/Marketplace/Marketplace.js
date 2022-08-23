import { Category } from "components/category";
import { Heading } from "components/heading";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Marketplace = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Marketplace";
  }, []);
  return (
    <div className="container">
      <Heading
        title={t("marketplace")}
        desc={t("marketplacePage.text1")}
      ></Heading>
      <div className="flex flex-col justify-center  my-10 pt-10">
        <Category />
      </div>
    </div>
  );
};

export default Marketplace;
