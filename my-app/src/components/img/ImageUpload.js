import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ImgUpload from "../../assets/img/image-removebg-preview.png";
import { useTranslation } from "react-i18next";

const ImageUpload = (props) => {
  const {
    name,
    className = "",
    image = "",
    handleDeleteImage = () => {},
    avatar = "",
    oldImage = "",
    ...rest
  } = props;

  const { t } = useTranslation();
  return (
    <>
      <label
        className={`cursor-pointer flex items-center justify-center border border-[#353242] w-full min-h-[288px] rounded-sm ${className} relative overflow-hidden group min-w-[288px] bg-[#262338]`}
      >
        <input type="file" name={name} className="hidden-input" {...rest} />
        {!avatar && !image && !oldImage && (
          <div className="flex flex-col items-center text-center pointer-events-none">
            <img
              src={ImgUpload}
              alt="upload-img"
              className="max-w-[80px] mb-5"
            />
            <p className="font-semibold">{t("upload")}</p>
            <div className="mt-3 font-sans text-xs">
              {avatar ? (
                "Choose your new avatar."
              ) : (
                <div>
                  {t("img-text1")} <br></br> {t("img-text2")} <br></br>
                  {t("img-text3")}
                </div>
              )}
            </div>
          </div>
        )}
        {avatar && !image && (
          <div className="flex flex-col items-center text-center pointer-events-none">
            <img src={avatar} alt="upload-img" className="max-w-[100px] mb-5" />
            <p className="font-semibold">{t("upload")}</p>
            <p className="mt-3 font-sans text-xs">{t("img-avatar")}</p>
          </div>
        )}

        {oldImage && !image && (
          <div className="flex flex-col items-center text-center pointer-events-none">
            <img
              src={oldImage}
              alt="update-img"
              className="w-full h-full object-cover max-w-[288px] max-h-[259px]"
            />
          </div>
        )}

        {image && (
          <div className="flex flex-col items-center text-center pointer-events-none">
            <img
              src={URL.createObjectURL(image)}
              alt="upload-img"
              className="w-full h-full object-cover max-w-[288px] max-h-[259px]"
            />
          </div>
        )}

        {image && (
          <Fragment>
            <button
              className=" w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer absolute z-10 shadow-lg opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible"
              onClick={handleDeleteImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </Fragment>
        )}
      </label>
    </>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.any,
};

export default ImageUpload;
