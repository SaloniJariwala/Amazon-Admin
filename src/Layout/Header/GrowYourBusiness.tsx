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
                        <div className="text">Become a prime Seller</div>
                    </Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link href="#">
                        <div className="text">Tools to help you grow</div>
                    </Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link href="#">
                        <div className="text">Selling Programs</div>
                    </Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link href="#">
                        <div className="text">Sell globally</div>
                    </Link>
                ),
            },
            {
                key: '5',
                label: (
                    <Link href="#">
                        <div className="text">Find Service Provider</div>
                    </Link>
                ),
            },
            {
                key: '6',
                label: (
                    <Link href="#">
                        <div className="text">Shopping Festivals</div>
                    </Link>
                ),
            }
        ]}
    />
);

const GrowYourBusiness: React.FC = () => {

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
                        <span className="link">Grow Your Business</span>
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

export default GrowYourBusiness;