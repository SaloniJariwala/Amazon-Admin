import styled from "styled-components";
import { Button, Input } from "antd";

export const HeaderWrapper = styled.div`
    padding: 0 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 30px rgb(0 0 0 / 20%);
    width: 100%;
    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin-top: unset;
        margin-bottom: unset;
    }
    .menu-spacing {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

export const MenuWrapper = styled.div`
    padding: 30px 0;
    margin: 0 16px;
    .link {
        color: black;
        font-weight: 700;
        font-size: 16px;
    }
`;

export const StartButton = styled(Button)`
    margin: 0 0 0 24px;
    padding: 0 1.3em!important;
    background-color: #f90;
    border: 2px solid #f90;
    box-shadow: 0 0 16px rgb(0 0 0 / 20%);
    color: #232f3e;
    width: auto;
    height: 40px;
    line-height: 37px;
    font-size: 16px;
    border-radius: 20px;
    font-weight: 700;
    text-align: center;
    &:active, &:hover, &:focus {
        color: #232f3e;
        border-color: #f90;
        background-color: #f90;
    }
`;

export const SearchWrapper = styled.div`
    background-color: #0099d9;
    height: 240px;
    width: 100%;
    padding-top: 80px;
    box-shadow: 0 0 30px rgb(0 0 0 / 20%);
    .search {
        max-width: 600px;
        width: 80%;
        height: auto;
        position: relative;
        margin: auto;
    }
    .search-suggestion {
        margin-top: 20px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        color: white;
        font-size: 16px;
    }
    .suggestion-label {
        font-weight: 400;
        margin-right: 1em;
    }
    .suggestion-list {
        list-style: none;
        display: flex;
        padding: unset;
    }
    .suggestion-link {
        color: white;
        font-weight: 700;
        margin-right: 1em;
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
    }
    .hover-underline-animation:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const SearchInput = styled(Input)`
    height: 64px;
    padding: 0 1em;
    outline: none;
    border-radius: 8px;
    box-shadow: 0 0 24px rgb(0 0 0 / 20%);
    border: 0;
    position: relative;
    z-index: 1;
    color: #6c7778;
`;