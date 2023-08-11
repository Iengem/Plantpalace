import React from 'react';
import {Link} from 'react-router-dom';
import './homePage.css';
import Navbar from '../Navbar/navBar';
import heroImage from '../images/heroImage.jpg';
import { firstSlide } from './Firstslide';

const homePage = () =>{
    return(
        <div className='homePage'>
            <Navbar/>
            <div className='content'>
                <div className='hero'>
                    <img className='heroImage' src={heroImage} alt='heropic'/>
                    <div className='heroText'>
                        <h1>Botany at your Fingertips</h1>
                        <Link className='shopPlants' to='/plant'>Buy Plants</Link>
                    </div>
                </div>
                <div className='section1'>
                    <div className='section1Header'>
                        <h1>Best Sellers</h1>
                        <Link to='/plant' className='shopLink'>SHOP ALL</Link>
                    </div>
                    <div className='slider'>
                        <div className='contentSlide'>
                            {/* Imported the array to be used for the Slider */}
                          {firstSlide.map((item, key)=>{
                            return(
                                <Link className='slideItem'>
                                    <div className='slideImage'>
                                        {item.img}
                                    </div>
                                    <div className='slideText'>
                                        <h1>{item.name}</h1>
                                        <p>{item.Price}</p>
                                    </div>
                                </Link>
                            )
                          })}
                        </div>
                    </div>
                    <div className='WaysToFind'>
                        <h1>More Ways to Find Your Perfect Plant</h1>
                        
                    </div>
                
                </div>
            </div>
        </div>        
    )
}

export default homePage