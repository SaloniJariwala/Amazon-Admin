import React, { useState } from "react";
import { HeaderWrapper, StartButton } from "./style";
import { ReactComponent as AmazonLogo } from "../../Assets/Logo/Amazon.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Logo/Search.svg";
import SellOnline from "./SellOnline";
import GrowYourBusiness from "./GrowYourBusiness";
import FeesPricing from "./FeesPricing";
import LearnMore from "./LearnMore";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Routepaths } from "../../Route/RoutePaths";

const Header: React.FC = () => {

    const navigate = useNavigate();
    const [isShowSearch, setIsShowSearch] = useState<boolean>(false);

    const handleOnClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate(Routepaths.dashboard);
        } else {
            navigate(Routepaths.signin);
        }
    }

    const showSearch = () => {
        setIsShowSearch(true);
    }

    const handleSearchClose = () => {
        setIsShowSearch(false);
    }

    return (
        <div style={{ position: 'sticky', width: '100%' }}>
            <HeaderWrapper>
                <AmazonLogo height={100} width={100} />
                <div className="menu-spacing">
                    <ul className="menu">
                        <li>
                            <SellOnline />
                        </li>
                        <li>
                            <GrowYourBusiness />
                        </li>
                        <li>
                            <FeesPricing />
                        </li>
                    </ul>
                    <div>
                        <LearnMore />
                    </div>
                </div>
                <StartButton onClick={handleOnClick}>Start Selling</StartButton>
                <SearchIcon
                    height={21}
                    width={21}
                    style={{ margin: 10, cursor: 'pointer' }}
                    onClick={showSearch}
                />
            </HeaderWrapper>
            {
                isShowSearch && (
                    <Search handleSearchClose={handleSearchClose} />
                )
            }
        </div>
    );
};

export default Header;