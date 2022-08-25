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
                        <div className="text">All About Selling (Blog)</div>
                    </Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link href="#">
                        <div className="text">Amazon Saathi</div>
                    </Link>
                ),
            },
            {
                key: '3',
                label: (
                    <Link href="#">
                        <div className="text">Bizzopedia</div>
                    </Link>
                ),
            },
            {
                key: '4',
                label: (
                    <Link href="#">
                        <div className="text">Events</div>
                    </Link>
                ),
            },
            {
                key: '5',
                label: (
                    <Link href="#">
                        <div className="text">Seller University</div>
                    </Link>
                ),
            },
            {
                key: '6',
                label: (
                    <Link href="#">
                        <div className="text">FAQs</div>
                    </Link>
                ),
            },
            {
                key: '7',
                label: (
                    <Link href="#">
                        <div className="text">Beginners guide to sell on Amazon</div>
                    </Link>
                ),
            }
        ]}
    />
);
const LearnMore: React.FC = () => {

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
                        <span className="link">Learn More</span>
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

export default LearnMore;