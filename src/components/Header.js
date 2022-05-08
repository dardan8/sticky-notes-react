import React from "react";
import {MdNightlightRound} from "react-icons/md";
import {MdWbSunny} from "react-icons/md";
const Header = ({handleDarkMode}) => {

    return (
        <div className="header">
            <h1> Your Notes </h1>
            {(true) ? (
                 <>
            <button
            className="save"
            onClick={() => 
                handleDarkMode (
                (previousDarkMode) => !previousDarkMode)}
            >
            Dark Mode
            <MdNightlightRound
            className="moon-icon"
            size="1em" 
            else 
           />
            </button>
            </>) : (
                <>
            <button
            className="save"
            onClick={() => 
             handleDarkMode(
                    (previousDarkMode) => !previousDarkMode)}
                >
                Bright Mode
                <MdWbSunny
                className="moon-icon"
                size="1em" 
               />
               </button>
               </>
               )}

        </div>
    )
}

export default Header;