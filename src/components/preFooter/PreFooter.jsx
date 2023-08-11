import React from 'react';
import '../preFooter/PreFooter.css'

const PreFooter = () => {
    return (
        <div>
            <div className="preFooter">
                <p className="preFooterHeading">Plants Made Simple</p>

                <div className="txtContContainer">
                    <div className="txtContainer">
                        <img src="https://images.pexels.com/photos/5410146/pexels-photo-5410146.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div>
                            <h5>Innovative  Shipping</h5>
                            <p>Embrace the future of plant discovery. <br /> Our virtual aisles offer more than products; they offer experiences. <br /> Take immersive garden tours, receive tailored recommendations, and let innovation redefine the way you bring nature home.</p>
                        </div>
                    </div>
                    <div className="txtContainer">
                        <img src="https://images.pexels.com/photos/17636541/pexels-photo-17636541/free-photo-of-white-lily-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div>
                            <h5>Quality Plants Guaranteed</h5>
                            <p>Welcome to our plant paradise. <br /> Unearth a world of exquisite greenery, each plant guaranteed for its superior quality. <br /> Elevate your space with the confidence of thriving, handpicked botanical beauty.</p>
                        </div>
                    </div>
                    <div className="txtContainer">
                        <img src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div>
                            <h5>Adequate Guidance</h5>
                            <p>Cultivate your green sanctuary with us. <br /> Beyond providing plants, we're committed to nurturing your plant parenting journey. <br /> Join us and gain access to a host of items for your plants needs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preFooter2">
                <p className="preFooterHeading2">Reviewed By</p>
                <div className="txtContContainer">
                    <div className="txtContainer">
                        <div>
                            <h5>The Verdant Chronicle | Rating: 9.2/10</h5>
                        </div>
                        <p>"The website's navigation is seamless, though some sections of the 'Plenty of Guidance' resources could be more comprehensive."</p>
                    </div>
                    <div className="txtContainer">
                        <div>
                            <h5>Horticultural Herald | Rating: 5/5</h5>
                        </div>
                        <p>"...with their 'Quality Plants Guaranteed' commitment. The diverse range of botanical gems reflects their dedication to quality curation."</p>
                    </div>
                    <div className="txtContainer">
                        <div>
                            <h5>Guardian | Rating: 9.2/10</h5>
                        </div>
                        <p>"The range of plants they offer is impressive, and the quality is outstanding."</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PreFooter;