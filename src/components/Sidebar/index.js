import React from "react";
import styled from "styled-components";

import sidebarIcon from "../../assets/icons/sidebar-icon.svg";

import styles from "../../assets/css/styles";

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #fff;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px 0;
    background-color: ${(props) =>
        props.theme === "light" ? styles.light : styles.dark};
`;

const SideBarClicker = styled.img`
    width: 45px;
    height: 40px;
    cursor: pointer;
`;

function SideBar({ columnHeight, setColumnHeight, theme }) {
    return (
        <SideBarContainer theme={theme}>
            <SideBarClicker
                src={sidebarIcon}
                onClick={(e) =>
                    columnHeight === "200px"
                        ? setColumnHeight("80px")
                        : setColumnHeight("200px")
                }
                alt=""
            />
        </SideBarContainer>
    );
}

export default SideBar;
