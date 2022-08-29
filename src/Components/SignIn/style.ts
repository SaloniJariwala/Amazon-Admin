import styled from "styled-components";

export const SigninWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 18px;
    .logo {
        margin-bottom: 18px;
    }
    .copyright-info {
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
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
    .form-label {
        display: block;
        padding-left: 2px;
        padding-bottom: 2px;
        font-weight: 700;
    }
    .form-input {
        width: 100%;
        height: 31px;
        padding: 3px 7px;
        line-height: normal;
        border: 1px solid #a6a6a6;
        border-top-color: #949494;
        border-radius: 3px;
        box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
        outline: 0;
        transition: all .1s linear;
        font-family: Arial,sans-serif;
        color: #111;
        font-size: 100%;
        vertical-align: middle;
        box-sizing: border-box;
        &:focus {
            border-color: #e77600;
            box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
        }
    }
    a {
        &:hover {
            text-decoration: underline;
            cursor: pointer;
            color: #c45500;
        }
    }
    .form-button {
        border-color: #a88734;
        width: 100%;
        background-color: #f0c14b;
        color: #111;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        box-sizing: border-box;
        height: 29px;
        &:hover {
            border-color: #9c7e31;
        }
        &:active {
            border-color: #846a29;
        }
    }
    .rememberMe {
        margin-top: 18px;
        display: flex;
        align-items: center;
    }
    .rememberLabel {
        padding-left: 5px;
        font-weight: 400;
        font-size: 14px;
    }
    .details-link {
        display: inline-block;
    }
    .ant-popover {
        width: auto;
        border-color: rgba(0,0,0,.2);
    }
    .ant-popover-title {
        background: linear-gradient(to bottom,#f7f7f7,#eaeaea);
    }
    .create-button {
        width: 100%;
        background: #e7e9ec;
        border-radius: 3px;
        border-color: #adb1b8 #a2a6ac #8d9096;
        border-style: solid;
        border-width: 1px;
        cursor: pointer;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        height: 33px;
        box-shadow: 0 1px 0 rgb(255 255 255 / 60%) inset;
        &:active, &:hover {
            border-color: #adb1b8 #a2a6ac #a2a6ac;
        }
        &:focus {
            box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
        }
    }
`;

export const ContentWrapper = styled.div`
    position: relative;
    text-align: left;
    width: 413px;
`;

export const TitleWrapper = styled.div`
    padding: 7px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;