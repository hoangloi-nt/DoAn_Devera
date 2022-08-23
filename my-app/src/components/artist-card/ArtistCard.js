import { Button } from "components/button";
import React from "react";
import { hashShortener } from "sdk/iconSDK";

const artistCard = ({ to, name, address, avatar, products, isYou }) => {
	return (
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="front">
					<div className="card w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-y-10">
						<img
							src={
								avatar ||
								"https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
							}
							alt=""
							className="object-cover w-[200px] h-[200px] mx-auto rounded-full"
						/>

						<div className="flex items-center justify-center leading-none gap-x-3">
							<span className="text-xl font-semibold">{name}</span>
							{isYou && (
								<div className="px-3 py-2 font-semibold text-white bg-green-500 rounded-xl">
									You
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="back">
					<div className="card w-[282px] h-[323px] bg-[#30384D] rounded-lg hover:-translate-y-1 transition-all flex flex-col justify-center items-center gap-y-5">
						<img
							src={
								avatar ||
								"https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
							}
							alt=""
							className="object-cover w-[80px] h-[80px] mx-auto rounded-full"
						/>
						<div className="flex items-center justify-center gap-x-3">
							<span>
								Name: <strong>{name}</strong> <br></br>
								Address: <strong>{hashShortener(address)}</strong> <br></br>
								Products: <strong>{products}</strong> <br></br>
							</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-y-4">
							{isYou && (
								<Button
									type="button"
									kind="primary"
									className="!text-sm"
									height={"36px"}
									to={"/profile"}
								>
									Update info
								</Button>
							)}

							{to && (
								<Button
									type="button"
									kind="primary"
									className="!text-sm"
									height={"36px"}
									to={to}
								>
									View products
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default artistCard;
