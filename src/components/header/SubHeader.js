import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SubHeader() {
    // State to keep track of the active link
    const [activeLink, setActiveLink] = useState("");


    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <div className="container-fluid p-0 SubHeader">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-5">
                            <li className={`px-2 nav-item ${activeLink === "Home" ? "active" : ""}`}>
                                <NavLink to={'/'} className="nav-link" href="#" onClick={() => handleLinkClick("Home")}>Home</NavLink>
                            </li>
                            <li className={`px-2 nav-item ${activeLink === "Brass" ? "active" : ""}`}>
                                <NavLink to={'/brass'} className="nav-link" href="#" onClick={() => handleLinkClick("Brass")}>Brass</NavLink>
                            </li>
                            <li className={ `px-2 nav-item ${activeLink === "Mala & Beads" ? "active" : ""}`}>
                                <NavLink to={'/mala'}className="nav-link" href="#" onClick={() => handleLinkClick("Mala & Beads")}>Mala & Beads</NavLink>
                            </li>
                            <li className={`px-2 nav-item ${activeLink === "More" ? "active" : ""}`}>
                                <NavLink to={'/more'} className="nav-link" href="#" onClick={() => handleLinkClick("More")}>More</NavLink>
                            </li>
                            <li className={`px-2 nav-item ${activeLink === "Puja Items" ? "active" : ""}`}>
                                <NavLink to={'/puja-item'} className="nav-link" href="#" onClick={() => handleLinkClick("Puja Items")}>Puja Items</NavLink>
                            </li>
                            <li className={`px-2 nav-item ${activeLink === "SKVT Special" ? "active" : ""}`}>
                                <NavLink to={'/skvt-special'} className="nav-link" href="#" onClick={() => handleLinkClick("SKVT Special")}>SKVT Special</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default React.memo(SubHeader);
