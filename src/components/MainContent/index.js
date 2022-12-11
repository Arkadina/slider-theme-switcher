import React from "react";
import styled from "styled-components";

const MainContentContainer = styled.div`
    background-color: #e8eaeb;
    width: 100%;
    height: 900px;
    grid-row-start: 2;
    grid-row-end: 3;
    padding: 40px 40px;
`;

function MainContent({ children }) {
    return <MainContentContainer>{children}</MainContentContainer>;
}

export default MainContent;
