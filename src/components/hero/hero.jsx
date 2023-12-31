import React, { useState } from "react";
import "../hero/hero.css";
import { AiOutlineDown } from "react-icons/ai";

const Hero = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId);
    };

    return (
        <div className="hero">
            <div className="left">
                <div className="heroContent" onClick={() => handleFilterClick("Large")}>
                    <p>LARGE</p>
                    <AiOutlineDown />
                </div>
                <div className="heroContent1" onClick={() => handleFilterClick("small")}>
                    <p>SMALL</p>
                    <AiOutlineDown />
                </div>
                <div className="heroContent1" onClick={() => handleFilterClick("medium")}>
                    <p>MEDIUM</p>
                    <AiOutlineDown />
                </div>
                <button onClick={() => setActiveFilter(null)}>CLEAR FILTERS</button>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div id="Large" style={{ display: activeFilter === "Large" || activeFilter === null ? "block" : "none" }}>
                        <img
                            src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=389,width=324,metadata=copyright,format=webp/wp-content/uploads/2022/06/bloomscape_cat-palm_xxl_charcoal-scaled.jpg"
                            alt=""
                        />
                        <div className="imgDescription">
                            <p>Eureka Lemon Tree</p>
                            <p>$20-$40</p>
                        </div>
                    </div>
                    <div id="small" style={{ display: activeFilter === "small" || activeFilter === null ? "block" : "none" }}>
                        <img
                            src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=396,width=324,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_dracaena-gold-lemon-lime_slate-1.jpg"
                            alt=""
                        />
                        <div className="imgDescription">
                            <p>Draecena Gold Star</p>
                            <p>$90</p>
                        </div>
                    </div>
                    <div id="medium" style={{ display: activeFilter === "medium" || activeFilter === null ? "block" : "none" }}>
                    <img
                            src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=396,width=324,metadata=copyright,format=webp/wp-content/uploads/2020/08/bloomscape_dracaena-gold-lemon-lime_slate-1.jpg"
                            alt=""
                        />
                        <div className="imgDescription">
                            <p>Draecena Gold Star</p>
                            <p>$90</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
