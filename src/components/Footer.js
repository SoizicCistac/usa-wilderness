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
            <img id="imgFooter1" src={camping}/>
            <img id="imgFooter2" src={hiking}/>
            <img id="imgFooter3" src={lac}/>
            <p className="textFooter">
                Réalisé par Etienne Pouvreau, Marie-Laure Debeaune et Soizic Cistac
                 -  promotion part-time juin 2021 
            </p>
            <img id="imgFooter4" src={widlife}/>
            <img id="imgFooter5" src={horseRiding}/>
            <img id="imgFooter6" src={montagne}/>
        </footer> 
    )
}

export default Footer;