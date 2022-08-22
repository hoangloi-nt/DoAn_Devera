import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "components/popper";
import { ProductItem } from "components/productItem";
import { useEffect, useState, useRef } from "react";

import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
      <Tippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="w-[300px]" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className="text-white text-base font-light px-3 py-1">
                Products
              </h4>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="relative flex items-center mx-5">
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search..."
            spellCheck={false}
            className=" py-3 pl-3 pr-10 bg-background rounded-lg border border-white flex-1 w-[300px]"
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />

          {!!searchValue && (
            <button className=" absolute right-11" onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          <span className="absolute cursor-pointer right-0 p-3">
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
          </span>
        </div>
      </Tippy>
    );
  }

export default Search;