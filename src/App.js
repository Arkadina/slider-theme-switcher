import React from "react";
import ThemeProvider from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ThemeProvider>
                <AppRoutes />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
