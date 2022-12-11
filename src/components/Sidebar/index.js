import React from "react";
import styled from "styled-components";

const SideBarContainer = styled.div`
    width: 100%;
    background-color: #fff;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

function SideBar({ columnHeight, setColumnHeight }) {
    console.log(columnHeight);
    console.log(setColumnHeight);
    return (
        <SideBarContainer>
            <button
                onClick={(e) =>
                    columnHeight === "200px"
                        ? setColumnHeight("80px")
                        : setColumnHeight("200px")
                }
            >
                Coluna
            </button>
        </SideBarContainer>
    );
}

export default SideBar;
