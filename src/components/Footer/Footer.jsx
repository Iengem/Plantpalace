import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerColumn">
                <h1>CONTACT INFO</h1>
                <p>ADDRESS MBM PLAZA, RUMUOMASI PORT-HARCOURT </p>
                <p>PHONE +234 APTECH</p>
                <p>SUPPORT LINK customer-support.plantpalace.com</p>
            </div>
            <div className="footerColumn">
                <h1>OUR COMPANY</h1>
                <p>About Us</p>
                <p>Affiliate Program</p>
                <p>Customer Reviews customer-support.plantpalace.com</p>
                <p>FAQ's</p>
                <p>WholeSale</p>
            </div>
            <div className="footerColumn">
                <h1>OUR POLICIES</h1>
                <p>Accessibility Statement</p>
                <p>Exclusions</p>
                <p>Privacy Policies</p>
                <p>Product & Guarantee</p>
                <p>Terms & Conditions </p>
            </div>
            <div className="footerColumn">
                <h1>RESOURCES</h1>
                <p>Resources</p>
                <p>Our Brands</p>
                <p>Planting Guide</p>
                <p>Shipping Calendar</p>
            </div>
            <div className="FooterSub">
                <div className="FootSubContainer">
                    <h1>© Basic_Coders, Inc 2023</h1>
                    <p>All rights Reserved</p>
                </div>
                <div className="FootSubContainer">
                    <h1>SUPPORT ID-934567</h1>
                    <p>All rights Reserved</p>
                </div>
            </div>
            <div className="blank"></div>
        </div>
    );
};

export default Footer;
