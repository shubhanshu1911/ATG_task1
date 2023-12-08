import React from "react";
import main from './images/main.png';

function Heading(){
    return (
        <div className="main">
            <img src={main} alt="mainImage" />
            <div>
                <h2 className="Heading">Computer Engineering</h2>
                <p className="subHeading">142,765 Computer Engineers follow this</p>
            </div>
        </div>
    )
}

export default Heading;