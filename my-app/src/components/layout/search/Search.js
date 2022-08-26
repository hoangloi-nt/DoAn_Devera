import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "components/popper";
import { ProductItem } from "components/productItem";
import { useEffect, useState, useRef } from "react";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from "hooks/useDebounce";
import * as request from "utils/request";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Search = () => {
	const { t } = useTranslation();
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);

	const debounced = useDebounce(searchValue, 500);

	const inputRef = useRef();

	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);

		const fetchApi = async () => {
			try {
				const res = await request.get(`search/products`, {
					params: {
						Name_contains: debounced,
						_limit: 5,
					},
				});
				setSearchResult(res);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		};

		fetchApi();
	}, [debounced]);

	const handleClear = () => {
		setSearchValue("");
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleChange = (e) => {
		const searchValue = e.target.value;
		if (!searchValue.startsWith(" ")) {
			setSearchValue(searchValue);
		}
	};

	const handleViewMore = () => {
		setSearchValue("");
		handleHideResult();
	};

	return (
		<div>
			<HeadlessTippy
				interactive
				visible={showResult && searchResult.length > 0}
				render={(attrs) => (
					<div className="w-[300px]" tabIndex="-1" {...attrs}>
						<PopperWrapper classname="result-search-wrapper">
							<h4 className="px-3 py-1 text-base font-light">
								{t("productSearch")}
							</h4>

							<div className="overflow-y-auto">
								{searchResult.map((result) => (
									<ProductItem
										key={result.id}
										data={result}
										onClick={() => {
											setSearchValue("");
											handleHideResult();
										}}
									/>
								))}
							</div>

							<Link
								to={`/search?p=${searchValue}`}
								className="px-3 py-1"
								onClick={handleViewMore}
							>
								View more...
							</Link>
						</PopperWrapper>
					</div>
				)}
				onClickOutside={handleHideResult}
			>
				<div className="header-search relative flex items-center mx-5 bg-background rounded-lg border border-white w-[300px]">
					<input
						ref={inputRef}
						value={searchValue}
						type="text"
						placeholder={t("search")}
						spellCheck={false}
						className="flex-1 h-full py-3 pl-3 pr-10 bg-transparent "
						onChange={handleChange}
						onFocus={() => setShowResult(true)}
					/>

					{!!searchValue && !loading && (
						<button
							className="absolute right-11 text-[#D9D9D9]"
							onClick={handleClear}
						>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
					{loading && (
						<FontAwesomeIcon
							className="loading absolute right-11 text-[#D9D9D9]"
							icon={faSpinner}
						/>
					)}

					<button
						className="absolute right-0 p-3 cursor-pointer"
						onMouseDown={(e) => e.preventDefault()}
					>
						<Link onClick={handleViewMore} to={`/search?p=${searchValue}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</Link>
					</button>
				</div>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
