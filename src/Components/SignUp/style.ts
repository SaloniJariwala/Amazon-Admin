import { Button } from "antd";
import styled from "styled-components";

export const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 18px;
    .logo {
        margin-bottom: 18px;
    }
`;

export const FormWrapper = styled.div`
    box-sizing: border-box;
    margin-bottom: 22px;
    display: block;
    border-radius: 4px;
    border: 1px #ddd solid;
    background-color: #fff;
    position: relative;
    padding: 20px 26px;
    width: 26%;
    h1 {
        font-weight: 470;
        font-size: 28px;
        line-height: 1.2;
    }
    .ant-btn {
        &:active, &:focus, &:hover {
            color: black;
            border-color: #a88734 #9c7e31 #846a29;
            background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
        }
    }
    .sign-in {
        display: flex;
        height: 22px;
        margin-top: 25px;
    }
`;

export const AntButton = styled(Button)`
    width: 100%;
    box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
    background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
    position: relative;
    display: inline-block;
    overflow: hidden;
    height: 29px;
    border-radius: 3px;
    vertical-align: middle;
    border-color: #a88734 #9c7e31 #846a29;
    border: 1px solid;
    margin-bottom: 8px;
`;