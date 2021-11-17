import React from "react";
import welcome from "../images/welcome.png";
import mask from "../images/final.png";
import success from "../images/success.png";

export const Success = () => {
    return ( <
            div className = "container success" >
            <
            div >
            <
            img src = { success }
            alt = "success" / >
            <
            /div> <
            div className = "mask" >
            <
            img className = "maskImage"
            src = { mask }
            alt = "mask" / >
            <
            /div> {
            /* <div className="welcome">
                    <img src={welcome} alt="welcome" />
                  </div> */
        } <
        span className = "final" >
        Those who wish to stop playing the game will be eliminated..!
        <
        /span> < /
    div >
);
};