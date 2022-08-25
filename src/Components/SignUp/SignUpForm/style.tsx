import styled from "styled-components";

export const ContainerWrapper = styled.div`
    .name-container {
        display: flex;
        flex-direction: column;
    }
    .input {
        border-radius: 3px;
    }
    .ant-input:hover {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;