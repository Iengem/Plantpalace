import React from 'react';
import {Link} from 'react-router-dom';
import './homePage.css';
import Navbar from '../Navbar/navBar';
import heroImage from '../images/heroImage.jpg';
import { firstSlide } from './Firstslide';
import pet from '../images/pet.webp';
import maint from '../images/maintenance.webp';
import cacti from '../images/cacti.webp';
import gift from '../images/gifts.webp';

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
                    <div className='Finder'>
                        <h1>More Ways to Find Your Perfect Plant</h1>
                        <div className='FinderContainer'>
                            <Link className='FinderCards'>
                                <img src={pet} alt="pic" />
                                <p>Pet friendly</p>
                            </Link>
                            <Link className='FinderCards'>
                                <img src={maint} alt="pic" />
                                <p>Maintenance</p>
                            </Link>
                            <Link className='FinderCards'>
                                <img src={cacti} alt="pic" />
                                <p>Cacti & Succulents</p>
                            </Link>
                            <Link className='FinderCards'>
                                <img src={gift} alt="pic" />
                                <p>Gifts</p>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>        
    )
}

export default homePage