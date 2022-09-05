import React from "react";
import { HeaderWrapper } from "./style";
import HeaderImg from "../../Assets/Images/SigninHeader.png";
import { ReactComponent as SettingIcon } from "../../Assets/Logo/Setting.svg";
import { Dropdown, Menu } from "antd";
import { Routepaths } from "../../Route/RoutePaths";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedInUser } from "../../ReduxStore/LoggedInUserSlice";

const SellerHeader: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.loggedInUser);
    console.log("Redux Data", user);

    const handleLogOut = () => {
        localStorage.removeItem('LogInToken');
        dispatch(removeLoggedInUser(user));
    }

    const menu = (
        <Menu
            items={[
                {
                    label: <a href={Routepaths.signin} onClick={handleLogOut}>Logout</a>,
                    key: '0',
                }
            ]}
        />
    );

    return (
        <HeaderWrapper>
            <div className="header-section">
                <img
                    src={HeaderImg}
                    alt="logo"
                />
                <div className="right-section">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <SettingIcon className="setting-icon" />
                    </Dropdown>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default SellerHeader;