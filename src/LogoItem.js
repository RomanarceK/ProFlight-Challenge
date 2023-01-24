import React from "react";

function LogoItem ({position, count}) {
    return(
        <img src="../proflight-logo.png" position={position} className={`logo-img ${position === count ? 'active' : ''}`}/>
    );
}

export { LogoItem }