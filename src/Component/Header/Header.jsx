import React from "react";
import LogoImg from "../../Assets/Images/logo.svg"
import MenuImg from "../../Assets/Images/menu.png"

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
                <div className="dropdown">
                     <button className="btn btn-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={MenuImg} alt="menu" width={50} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Home</a></li>
                        <li><a className="dropdown-item" href="#">Portfolio</a></li>
                        <li><a className="dropdown-item" href="#">Process</a></li>
                        <li><a className="dropdown-item" href="#">Team</a></li>
                        <li><a className="dropdown-item" href="#">Resources</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;