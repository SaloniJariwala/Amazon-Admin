import styled from "styled-components";

export const HeaderWrapper = styled.div`
    .header-section {
        padding: 10px 24px;
        border-radius: 4px;
        position: relative;
        background-color: #f6f6f6;
        border: 1px #ddd solid;
        display: flex;
        justify-content: space-between;
    }
    .setting-icon {
        transition: all 0.5s ease-in-out;
        &:hover {
            cursor: pointer;
            transform: rotate(223deg);
            fill: black;
        }
    }
`;