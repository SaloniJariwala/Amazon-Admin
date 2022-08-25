import React, { useState } from "react";
import { MenuWrapper } from "./style";
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import styled from "styled-components";

const Link = styled.a`
    .text {
        padding: 5px;
    }
`;

const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <Link href="#">
                        <div className="text">Requirements to Sell</div>
                    </Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link href="#">
                        <div className="text">Why Sell on Amazon</div>
                    </Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link href="#">
                        <div className="text">List Your Products</div>
                    </Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link href="#">
                        <div className="text">Storage & Delivery</div>
                    </Link>
                ),
            },
            {
                key: '5',
                label: (
                    <Link href="#">
                        <div className="text">Help & Support</div>
                    </Link>
                ),
            },
            {
                key: '6',
                label: (
                    <Link href="#">
                        <div className="text">Seller Success Stories</div>
                    </Link>
                ),
            }
        ]}
    />
);

const FeesPricing: React.FC = () => {

    const [isHover, setIsHover] = useState<boolean>(false);

    const handleArrowUp = () => {
        setIsHover(true);
    }

    const handleArrowDown = () => {
        setIsHover(false);
    }

    return (
        <MenuWrapper onMouseOver={handleArrowUp} onMouseOut={handleArrowDown}>
            <Dropdown overlay={menu} placement="bottom">
                <a href="" onClick={e => e.preventDefault()}>
                    <Space>
                        <span className="link">Fees & Pricing</span>
                        {
                            isHover ?
                                <UpOutlined style={{ color: 'black' }} /> :
                                <DownOutlined style={{ color: 'black' }} />
                        }
                    </Space>
                </a>
            </Dropdown>
        </MenuWrapper>
    );
};

export default FeesPricing;