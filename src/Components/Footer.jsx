import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa"



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
                                <li><FaFacebookF className="footerIcon" /></li>
                                <li><FaGithub className="footerIcon" /></li>
                                <li><FaLinkedinIn className="footerIcon" /></li>
                                <li><FaInstagram className="footerIcon" /></li>
                                <li><FaTwitter className="footerIcon" /></li>
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
