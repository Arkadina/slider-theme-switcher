import React from "react";
import styled, { keyframes } from "styled-components";

import sidebarIcon from "../../assets/icons/sidebar-icon.svg";

const SideBarContainer = styled.div`
    width: 100%;
    background-color: #fff;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SideBarClicker = styled.img`
    cursor: pointer;
`;

function SideBar({ columnHeight, setColumnHeight }) {
    return (
        <SideBarContainer>
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
