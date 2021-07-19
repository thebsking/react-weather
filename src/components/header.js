import { Sizes, Switch } from "react-foundation";
import React from "react";

const Header = () => {
   return (
   <header>
       <h1>Weather Search</h1>
        <div className="switch-inner-label">
            <p className="theme-label">Dark Mode: </p>
            <Switch size={Sizes.SMALL} active={{ text: 'on' }} inactive={{ text: 'off' }} />
        </div>
    </header>
   )
}

export default Header;