import { Card } from "components/card";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import request from "utils/request";

const SearchPage = () => {
	const searchValue = useLocation().search.slice(3);
	const [searchResult, setSearchResult] = useState([]);
	const [result, setResult] = useState(0);

	useEffect(() => {
		const fetchApi = async () => {
			try {
				const res = await request.get(`search/products`, {
					params: {
						Name_contains: searchValue,
					},
				});
				setSearchResult(res.data);
				setResult(res.data.length);
			} catch (error) {}
		};

		fetchApi();
	}, [searchValue]);

	return (
		<div className="container ">
			<h2 className="mt-16 mb-4 heading-text">Search results</h2>

			{result > 0 ? (
				<div className={`mb-4 grid grid-cols-4 mx-auto gap-x-10 gap-y-12`}>
					{searchResult.map((product) => {
						return (
							<Card
								key={product.id}
								to={`/buy/${product.id}`}
								title={product?.Name}
								price={product?.Price}
								image={product?.image}
								address={product?.createby?.address}
								avatar={product?.createby?.avatar}
							></Card>
						);
					})}
				</div>
			) : (
				<div className="flex justify-center text-2xl font-semibold">
					No Information Found
				</div>
			)}
		</div>
	);
};

export default SearchPage;
