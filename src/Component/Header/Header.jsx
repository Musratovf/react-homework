import React from "react";
import LogoImg from "../../Assets/Images/logo.svg"

function Header() {
    return (
        <>
            <header className="header">
                <a href="#link">
                    <img src={LogoImg} alt="logo" /></a>
                <ul className="list">
                    <li className="list-item">
                        <a href="#link" className="logo-link">Home</a>
                    </li>
                    <li className="list-item">
                        <a href="#link" className="logo-link">Portfolio</a>
                    </li>
                    <li className="list-item">
                        <a href="#link" className="logo-link">Process</a>
                    </li>
                    <li className="list-item">
                        <a href="#link" className="logo-link">Team</a>
                    </li>
                    <li className="list-item">
                        <a href="#link" className="logo-link">Resources</a>
                    </li>
                    <li className="list-item">
                        <button>Get project quote</button>
                    </li>
                </ul>
            </header>
        </>
    )
}
export default Header;