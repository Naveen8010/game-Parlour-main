import React from "react";
import { Link } from "react-router-dom";
import "./css/FooterCss.css";
function Footer()
{
    return(
        <footer className="footerdiv">
        <div className="footer-left">
            <h1>Game_Parlour</h1>

            <div className="social-icons">
                <a href="https://www.linkedin.com/in/naveen-chaudhary-7a60092b6/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" ></i></a>
                
               
            </div>
        </div>

        <div className="footer-right">
            <ul>
                <li><Link to="">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="">Policy</Link></li>
            </ul>
        </div>

    </footer>
    );
}


export default Footer;