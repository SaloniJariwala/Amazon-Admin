import React from "react";
import { SearchInput, SearchWrapper } from "./style";
import { ReactComponent as CloseIcon } from "../../Assets/Logo/Close.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Logo/Search.svg";
import { ISearchContainerProps } from "../../Types/Header";

const Search: React.FC<ISearchContainerProps> = ({
    handleSearchClose = () => {},
}) => {
    return (
        <SearchWrapper>
            <CloseIcon
                fill="white"
                height={25}
                width={25}
                style={{ position: 'absolute', top: 110, right: 85, cursor: 'pointer' }}
                onClick={handleSearchClose}
            />
            <div className="search">
                <SearchInput placeholder="how to sell online, try fba for free" prefix={<SearchIcon />} />
                <div className="search-suggestion">
                    <span className="suggestion-label">Are you looking for: </span>
                    <ul className="suggestion-list">
                        <li>
                            <a
                                href="https://sell.amazon.in/search?search=how%20to%20sell%20online"
                                className="suggestion-link hover-underline-animation"
                            >
                                how to sell online
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://sell.amazon.in/search?search=%20try%20fba%20for%20free"
                                className="suggestion-link hover-underline-animation"
                            >
                                try fba for free
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </SearchWrapper>
    );
};

export default Search;