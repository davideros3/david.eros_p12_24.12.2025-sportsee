import React from "react";
import Logo from "./Logo";
import TopNavigation from "./TopNavigation .jsx";
import imageLogo from "../assets/sportsee-logo.png";


const TopHeader = () => {
    return (
    <header className="top-header">
        <Logo logo={imageLogo}/>
        <TopNavigation/>
    </header>
    )
};

export default TopHeader;


