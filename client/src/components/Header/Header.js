import React from 'react';
import "./Header.scss";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="outer-container">
            <div className="header-container">
                <header className="border-radius-small bg-dark-gray">
                    <div className="header-left">
                        <Link to="courses">Courses</Link>
                        <Link to="projects">Projects</Link>
                        <Link to="forums">Forums</Link>
                    </div>
                    <div className="header-center">
                        <Link to="/" className="">
                            <img src={require("../../assets/images/logo.png")} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="header-right">
                        <Link to="login" className="sign-in">Log In</Link>
                        <Link to="register" className="sign-in">Sign Up</Link>
                    </div>
                    <div className="header-right-mobile">
                        <Link to="login" className="sign-in">Courses</Link>
                        <Link to="register" className="sign-in">Log In</Link>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
