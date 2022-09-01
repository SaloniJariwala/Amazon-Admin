import React from "react";
import { HeaderWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";

const SellerHeader: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="header-section">
                <img
                    src={HeaderImg}
                    alt="logo"
                />
            </div>
        </HeaderWrapper>
    );
};

export default SellerHeader;