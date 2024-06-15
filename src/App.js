// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import SearchMovies from "./pages/searchMovies";
import AllMovies from "./pages/allMovies";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/searchMovies" element={<SearchMovies />} />
                <Route
                    path="/allMovies"
                    element={<AllMovies />}
                />
            </Routes>
        </Router>
    );
}

export default App;
