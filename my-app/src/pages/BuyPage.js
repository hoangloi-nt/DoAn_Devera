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
const BuyPage = () => {
	const { t } = useTranslation();
	const { nftId } = useParams();
	const [productData, setProductData] = useState({});
	const [listProductData, setListProductData] = useState([]);
	const [sold, setSold] = useState(false);
	const { userInfo } = useAuth();
	const [checkUser, setCheckUser] = useState(false);
	const sendToken = async (address, price) => {
		const transferSuccess = await transfer({
			to: address,
			value: price,
		});

		if (transferSuccess === true) {
			console.log("Done");
			updateProduct(nftId, {
				//user
				id: userInfo.id,
			});
			setSold(true);
		}
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
			toast.success(t("buyPage.succes"));
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
	);
};

export default BuyPage;
