/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Themed } from "theme-ui";
import rightArrow from "../assets/images/right-arrow.svg";
import { theme } from "../theme/theme.js";

const buttonColor = theme['colors']['buttonColor'];

const bannerSx = {

    ".bigBox": {
        display: "flex",
        padding: "1.5vh",
        flexDirection: "column",
        border: "2px solid lightgrey",
        justifyContent: "center",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.4)",
        opacity: "1",
        p: {
            opacity: "1",
            marginBottom: "2%",
        },
        strike: {
            color: "rgba(0,0,0,0.5)",
            marginRight: "0.5em",
        },
        backgroundColor: "white",
        textAlign: "center",
        position: "sticky",
        top: "0",
    },
    ".buttonLink": {
        color: "white",
        backgroundColor: buttonColor,
        padding: "10px 10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        borderRadius: "4px",
        fontSize: "18px",
        width: "80%",
        fontFamily: "sans-serif",
        fontWeight: "600",
        padding: "20px",
    },
    ".xButton": {
        color: buttonColor,
        backgroundColor: "transparent",
        textAlign: "center",
        textDecoration: "none",
        display: "block",
        borderRadius: "4px",
        fontSize: "30px",
        fontFamily: "sans-serif",
        fontWeight: "600",
        width: "50px",
        marginRight: "0",
        marginLeft: "auto",
        padding: "10px",
        // border: "none",
    },
};


function SubscribeBanner() {

    var removeme = document.getElementsByClassName('remove');
    for (var i = 0; i < removeme.length; i++) {
        removeme[i].addEventListener('click', function () {
            console.log("removal")
            this.parentNode.remove();
        });
    }
    
    return (
        <div css={bannerSx}>
            <div className="bigBox">
                <button class="remove xButton">X</button>
                <h3 align="center">Full Subscription</h3>
                <br />
                <Themed.h2><strike>&nbsp;$45.00&nbsp;</strike>$35.00 / yr </Themed.h2>
                <br />
                <p>Renews automatically. Cancel anytime. Non-refundable.</p>
                <div align="center">
                    <a className="buttonLink" href={"https://buy.stripe.com/eVa9Ej3Hy4Hw7T26oo"} target="_blank">
                        SUBSCRIBE NOW
                    </a>
                </div>
            </div>
        </div>
    )
    
}


export default SubscribeBanner;