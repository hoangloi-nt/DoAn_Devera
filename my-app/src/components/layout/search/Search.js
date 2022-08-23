import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "components/popper";
import { ProductItem } from "components/productItem";
import { useEffect, useState, useRef } from "react";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDebounce from "hooks/useDebounce";
import * as request from "utils/request";
import { useTranslation } from "react-i18next";

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

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="w-[300px]" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className="text-white text-base font-light px-3 py-1">
                {t("productSearch")}
              </h4>

              <div className="overflow-y-auto">
                {searchResult.map((result) => (
                  <ProductItem key={result.id} data={result} />
                ))}
              </div>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="relative flex items-center mx-5 bg-background rounded-lg border border-white w-[300px]">
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder={t("search")}
            spellCheck={false}
            className=" py-3 pl-3 pr-10 flex-1 h-full bg-transparent"
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
            className="absolute cursor-pointer right-0 p-3"
            onMouseDown={(e) => e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
