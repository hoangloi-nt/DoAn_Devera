import React from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { transfer } from "sdk/iconSDK.js";
import { useAuth } from "components/contexts/auth-context";
import { useTranslation } from "react-i18next";

import styled from "styled-components";
import Swal from "sweetalert2";
const BuyPage = () => {
  const BuyPageStyled = styled.div`
    .modal-wrapper {
      background-color: rgba(0, 0, 0, 0.9);
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .modal {
      background-color: #1c233d;
      width: 500px;
      height: 270px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      font-size: 18px;
      position: relative;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 10px;
    }
    .loader {
      border: 10px solid #f3f3f3; /* Light grey */
      border-top: 10px solid #3498db; /* Blue */
      border-left: 10px solid #3498db; /* Blue */
      border-right: 10px solid #3498db; /*Blue */
      border-radius: 50%;
      width: 100px;
      height: 100px;
      animation: spin 2s linear infinite;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 17px;
      font-size: 35px;
      cursor: pointer;
      :hover {
        color: #ccc;
      }
    }
    .message-success-link {
      color: blue;
      display: flex;
      justify-content: center;
    }
  `;
  const { t } = useTranslation();
  const { nftId } = useParams();
  const [productData, setProductData] = useState({});
  const [listProductData, setListProductData] = useState([]);
  const [sold, setSold] = useState(false);
  const { userInfo } = useAuth();
  const [checkUser, setCheckUser] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [checkBuyUser, setCheckBuyUser] = useState(false);
  const [txHash, setTxHash] = useState("");
  let TxHash = "";

  const sendToken = async (address, price) => {
    setModal(true);
    let transferSuccess = await transfer({
      to: address,
      value: price,
    });
    console.log(transferSuccess);
    if (transferSuccess) {
      setModalSuccess(true);
      setTimeout(() => {
        setModalSuccess(false);
        setModal(false);
        TxHash = `${transferSuccess}`;
        updateProduct(
          nftId,
          {
            //user
            id: userInfo.id,
          },
          TxHash
        );
        Swal.fire({
          icon: "success",
          html: `
						<div style="font-size: 22px;font-weight: 600;">Your transaction was submitted successfully</div>
						<a style="margin-top: 15px; font-weight: 600; color: #2ca3cc; display: flex; justify-content: center;" target="_blank" 
						href="https://sejong.tracker.solidwallet.io/transaction/${
              txHash || productData?.txHash
            }">View history at <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg></a>`,
          showCloseButton: true,
          focusConfirm: false,
          width: "600px",
        });

        setTxHash(TxHash);
        setSold(true);
      }, 4000);
    } else {
      setModal(false);
      Swal.fire({
        icon: "error",
        html: `<div style="font-size: 22px;font-weight: 600;">Your transaction was canceled</div>`,
        showCloseButton: true,
        focusConfirm: false,
        width: "600px",
      });
    }
  };
  const cancelSubmit = () => {
    setModal(false);
    setModalSuccess(false);
  };
  const onSubmit = async (address, price) => {
    sendToken(address, price);
  };
  useEffect(() => {
    async function fetchProductData() {
      const product = await axios.get(
        `http://localhost:1337/products/${nftId}`
      );
      setProductData(product.data);
      if (product.data.boughtby) {
        setSold(true);
      }
      if (product.data.boughtby?.id === userInfo.id) {
        setCheckBuyUser(true);
      }
    }
    setSold(false);
    fetchProductData();
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [nftId, userInfo.id, txHash]);

  async function updateProduct(id, data, TxHash) {
    try {
      const response = await axios.put(`http://localhost:1337/products/${id}`, {
        boughtby: data,
        txHash: TxHash,
      });
      console.log("buy:", response);
    } catch (error) {
      console.log(error);
      toast.error(t("buyPage.fail"), error.message);
    }
  }
  const creatorId = productData?.createby?.id;

  useEffect(() => {
    if (!creatorId) return;
    async function fetchCreatorData() {
      const creator = await axios.get(
        `http://localhost:1337/creators/${creatorId}`
      );
      let result = [];
      creator.data.create.forEach((item) => {
        if (item.id !== parseInt(nftId)) {
          result.push(item);
        }
      });
      setListProductData(result);
    }
    fetchCreatorData();
    if (creatorId === userInfo.id) setCheckUser(true);
  }, [creatorId, nftId, userInfo.id]);

  useEffect(() => {
    document.title = "Buy Page";
  }, []);
  return (
    <BuyPageStyled>
      {modal ? (
        modalSuccess ? (
          <div className="modal-wrapper">
            <div className="modal">
              <div className="loader"></div>
              <h1>Please wait a moment.</h1>
            </div>
          </div>
        ) : (
          <div className="modal-wrapper">
            <div className="modal">
              <span className="close-btn" onClick={cancelSubmit}>
                x
              </span>
              <div className="loader"></div>
              <h1>Waiting for conformation in your wallet.</h1>
            </div>
          </div>
        )
      ) : (
        <></>
      )}

      <div className="container ">
        <div className="flex flex-col items-center justify-center mt-3">
          {sold ? (
            <div className="mb-4 heading-text">{t("buyPage.soldTitle")}</div>
          ) : checkUser ? (
            <div className="mb-4 heading-text">{t("buyPage.ownTitle")}</div>
          ) : (
            <div className="mb-4 heading-text">{t("buyPage.buyTitle")}</div>
          )}

          <Card
            to={"#"}
            image={productData?.image}
            title={productData?.Name}
            address={productData?.createby?.address}
            price={productData?.Price}
            avatar={productData?.createby?.avatar}
          ></Card>
          {sold
            ? !checkUser && <div className="my-3"></div>
            : !checkUser && (
                <>
                  <div className="my-6 message-text">{t("buyPage.desc")}</div>
                  <Button
                    kind="primary"
                    width={"183px"}
                    onClick={() =>
                      onSubmit(
                        productData.createby.address,
                        Number(productData.Price)
                      )
                    }
                  >
                    {t("buyPage.buy")}
                  </Button>
                </>
              )}
          {sold && checkBuyUser && (
            <div className="my-4 message-text">
              <a
                href={`https://sejong.tracker.solidwallet.io/transaction/${
                  txHash || productData?.txHash
                }`}
                target="_blank"
                rel="noreferrer"
              >
                TxHash:{" "}
                {txHash?.slice(0, 25) ||
                  productData?.txHash?.slice(0, 25) ||
                  TxHash?.slice(0, 25)}
                ...
              </a>
            </div>
          )}
          {checkUser && (
            <div className="flex flex-col items-center justify-center gap-3 my-6">
              <Button
                type="button"
                kind="primary"
                to={`/update/${productData.id}`}
              >
                {t("buyPage.updateBtn")}
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center my-4">
          <div className="mb-6 text-left heading-text">{t("buyPage.more")}</div>
          <div className="grid grid-cols-4 gap-10 mx-auto">
            {listProductData.slice(0, 8).map((item) => (
              <Card
                key={item.id}
                to={`/buy/${item.id}`}
                image={item?.image}
                title={item?.Name}
                address={productData?.createby?.address}
                price={item?.Price}
                avatar={productData?.createby?.avatar}
              ></Card>
            ))}
          </div>
          {listProductData.length > 8 ? (
            <NavLink className={"text-right my-3"} to={`/artist/${creatorId}`}>
              {t("buyPage.viewAll")}
            </NavLink>
          ) : (
            <></>
          )}
        </div>
      </div>
    </BuyPageStyled>
  );
};

export default BuyPage;
