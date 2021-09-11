import React from "react";
import "../App.css";
import camping from "./img/camping.png";
import montagne from "./img/montagne.png";
import hiking from "./img/randonnee.png";
import widlife from "./img/empreintes.png";
import lac from "./img/lac.png";
import horseRiding from "./img/horseRiding.png";

const Footer = () => {
    return(
        <footer className="footer">
            <img id="imgFooter1" src={camping} alt="camping logo"/>
            <img id="imgFooter2" src={hiking} alt="hiking logo"/>
            <img id="imgFooter3" src={lac} alt="lac logo"/>
            <p className="textFooter">
                Created by Etienne Pouvreau, Marie-Laure Debeaune and Soizic Cistac
                 -  promotion part-time june 2021 WCS
            </p>
            <img id="imgFooter4" src={widlife} alt="wildlife logo"/>
            <img id="imgFooter5" src={horseRiding} alt="horse logo"/>
            <img id="imgFooter6" src={montagne} alt="mountain logo"/>
        </footer> 
    )
}

export default Footer;