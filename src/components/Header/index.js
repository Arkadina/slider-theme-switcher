import React from "react";
import styled from "styled-components";

import styles from "../../assets/css/styles";

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    width: 100%;
    height: 60px;
    background-color: ${(props) =>
        props.theme === "light" ? styles.light : styles.dark};
`;

const Button = styled.button`
    border: none;
    background-color: none;
    cursor: pointer;
    margin: 5px;
    padding: 5px 10px;
`;

function Header({ theme, defineTheme }) {
    return (
        <HeaderContainer theme={theme}>
            Header
            <p>
                <Button onClick={(e) => defineTheme("dark")}>Dark</Button>

                <Button onClick={(e) => defineTheme("light")}>Light</Button>
            </p>
        </HeaderContainer>
    );
}

export default Header;
