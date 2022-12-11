import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function defineTheme(theme) {
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, defineTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
