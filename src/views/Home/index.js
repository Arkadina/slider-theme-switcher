import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

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

    return (
        <HomeContainer columnHeight={columnHeight}>
            <SideBar
                columnHeight={columnHeight}
                setColumnHeight={setColumnHeight}
            />
            <Header />
            <div className="scrollContainer">
                <MainContent>
                    r43543534543
                    <Outlet />
                </MainContent>
            </div>
        </HomeContainer>
    );
}

// {ThemeConsume.defineTheme("dark")}
// <p>{ThemeConsume.theme}</p>
// const ThemeConsume = useContext(ThemeContext);

export default Home;
