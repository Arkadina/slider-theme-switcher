import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

import { ThemeContext } from "../../contexts/ThemeContext";

const HomeContainer = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: ${(props) => props.columnHeight} auto;
    height: 100vh;
    transition: all 0.2s ease-in;

    .scrollContainer {
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;

function Home() {
    const [columnHeight, setColumnHeight] = useState("200px");
    const ThemeConsume = useContext(ThemeContext);

    return (
        <HomeContainer columnHeight={columnHeight}>
            <SideBar
                columnHeight={columnHeight}
                setColumnHeight={setColumnHeight}
                theme={ThemeConsume.theme}
            />
            <Header
                theme={ThemeConsume.theme}
                defineTheme={ThemeConsume.defineTheme}
            />
            <div className="scrollContainer">
                <MainContent>
                    <Outlet />
                </MainContent>
            </div>
        </HomeContainer>
    );
}

export default Home;
