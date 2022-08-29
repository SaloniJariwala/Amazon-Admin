import styled from "styled-components";

export const ContainerWrapper = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        span {
            font-weight: bold;
            font-size: 13px;
            margin-bottom: 5px;
        }
    }
    .input {
        border-radius: 3px;
    }
    .error {
        border-color: #c40000;
        box-shadow: 0 0 0 3px rgb(221 0 0 / 10%) inset;
    }
    .ant-input:hover {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
    .select {
        width: 35%;
        font-size: 11px;
    }
    .option {
        font-size: 10px;
    }
    .ant-select-item-option {
        font-size: 11px;
    }
`;