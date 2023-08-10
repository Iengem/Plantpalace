import React from 'react';
import {Link} from 'react-router-dom';
import './homePage.css';
import Navbar from '../Navbar/navBar';
import heroImage from '../images/heroImage.jpg';

const homePage = () =>{
    return(
        <div className='homePage'>
            <Navbar/>
            <div className='content'>
                <div className='hero'>
                    <img className='heroImage' src={heroImage}></img>
                    <div className='heroText'>
                        <h1>Botany at your Fingertips</h1>
                        <Link className='shopPlants' to='/plant'>Buy Plants</Link>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default homePage