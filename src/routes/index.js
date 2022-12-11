import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../views/About";
import Home from "../views/Home";

function index() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default index;
