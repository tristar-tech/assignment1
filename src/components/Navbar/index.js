// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>                    
                    <NavLink to="/allMovies" activeStyle>
                        Browse Movies
                    </NavLink>
                    <NavLink to="/searchMovies" >
                        Search Movies
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;
