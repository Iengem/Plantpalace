import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
    return (
<div>
                    <footer>
                        <div className="footCont">
                            <p className="footContHeading">CONTACT INFO</p>
                            <ul>
                                <li>ADDRESS <br /> MBM PLAZA, RUMUOMASI,<br /> PORT-HARCOURT </li>
                                <li>PHONE <br />+234 APTECH</li>
                                <li>SUPPORT LINK <br />customer-support.plantpalace.com</li>
                            </ul>
                        </div>
                        <div className="footCont">
                            <p className="footContHeading">OUR COMPANY</p>
                            <ul>
                                <li>About Us</li>
                                <li>Affiliate Program</li>
                                <li>Customer Reviews<br />customer-support.plantpalace.com</li>
                                <li>FAQ's</li>
                                <li>WholeSale</li>
                            </ul>
                        </div>
                        <div className="footCont">
                            <p className="footContHeading">OUR POLICIES</p>
                            <ul>
                                <li>Accessibility Statement</li>
                                <li>Exclusions</li>
                                <li>Privacy Policies</li>
                                <li>Product & Guarantee</li>
                                <li>Terms & Conditions </li>
                            </ul>
                        </div>
                        <div className="footCont">
                            <p className="footContHeading">RESOURCES</p>
                            <ul>
                                <li>Resources</li>
                                <li>Our Brands</li>
                                <li>Planting Guide</li>
                                <li>Shipping Calendar</li>
                            </ul>
                        </div>

                    </footer>
                    <div className="FooterSub">
                        <div className="FootSubCont1">
                            <p>© Basic_Coders, Inc 2023</p>
                            <p>All rights Reserved</p>
                        </div>
                        <div className="FootSubCont1">
                            <p>SUPPORT ID-934567</p>
                            <p>All rights Reserved</p>
                        </div>
                    </div>
                    <div className="blank"></div>
                </div>
    );
};

export default Footer;
