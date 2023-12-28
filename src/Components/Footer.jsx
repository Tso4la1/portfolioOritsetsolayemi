import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa"
import { Icons } from './Icons';



export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyCenter">
                        <div className="footer-centent">
                            <div className="footer-section-logo">
                                <span>CodeWithTsola</span>
                            </div>
                            <ul className="footerCircles">
                                <li><a href="https://www.facebook.com/oritsetsolayemi.omayuku.33"><FaFacebookF className="footerIcon" /></a></li>
                                <li><a href="https://github.com/Tso4la1"><FaGithub className="footerIcon" /></a></li>
                                <li><a href="linkedin.com/in/oritsetsolayemi-omayuku-712a24251"><FaLinkedinIn className="footerIcon" /></a></li>
                                <li><a href="https://www.instagram.com/codewithtsola/"><FaInstagram className="footerIcon" /></a></li>
                                <li><a href="https://twitter.com/TsolaJohn85487"><Icons name="x" /></a></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} CodeWithTsola | All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
