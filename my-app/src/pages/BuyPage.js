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
import { useRef } from "react";
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
			border-right: 10px solid #3498db; /* Blue */
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
	`;
	const { t } = useTranslation();
	const { nftId } = useParams();
	const [productData, setProductData] = useState({});
	const [listProductData, setListProductData] = useState([]);
	const [sold, setSold] = useState(false);
	const { userInfo } = useAuth();
	const [checkUser, setCheckUser] = useState(false);
	const [modal, setModal] = useState(false);

	const sendToken = async (address, price, { signal } = {}) => {
		setModal(true);
		let transferSuccess = await transfer({
			to: address,
			value: price,
		});

		if (transferSuccess === true) {
			console.log("Done");
			updateProduct(nftId, {
				//user
				id: userInfo.id,
			});
			Swal.fire("Payment success!", "", "success");
			setSold(true);
		} else {
			Swal.fire("Payment has been canceled!", "", "error");
		}
		setModal(false);
	};
	const cancelSubmit = () => {
		setModal(false);
	};
	const onSubmit = async (address, price) => {
		sendToken(address, price);
	};
	useEffect(() => {
		async function fetchProductData() {
			const product = await axios.get(
				`http://localhost:1337/products/${nftId}`,
			);
			setProductData(product.data);
			if (product.data.boughtby) {
				setSold(true);
			}
		}
		setSold(false);
		fetchProductData();
		document.body.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [nftId]);

	async function updateProduct(id, data) {
		try {
			await axios.put(`http://localhost:1337/products/${id}`, {
				boughtby: data,
			});
		} catch (error) {
			console.log(error);
		}
	}
	const creatorId = productData?.createby?.id;

	useEffect(() => {
		if (!creatorId) return;
		async function fetchCreatorData() {
			const creator = await axios.get(
				`http://localhost:1337/creators/${creatorId}`,
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
				<div className="modal-wrapper">
					<div className="modal">
						<span className="close-btn" onClick={cancelSubmit}>
							x
						</span>
						<div className="loader"></div>
						<h1>Waiting for conformation in your wallet</h1>
					</div>
				</div>
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
						? !checkUser && <div className="my-6"></div>
						: !checkUser && (
								<>
									<div className="my-6 message-text">{t("buyPage.desc")}</div>
									<Button
										kind="primary"
										width={"183px"}
										onClick={() =>
											onSubmit(
												productData.createby.address,
												Number(productData.Price),
											)
										}
									>
										{t("buyPage.buy")}
									</Button>
								</>
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
