import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

const navBar = () =>{
    return(
        <nav>
            <h1 className='logo'>PlantPalace</h1>

            {/* List of links to other pages */}

            <div className='Links'>
                <Link className='Link' to='/plant'>PLANTS</Link>
                <Link className='Link' to='/careTools'>CARE TOOLS</Link>
                <Link className='Link' to='/Gifts'>GIFTS</Link>
                <Link className='Link' to='/Learn'>LEARN</Link>
            
            </div>
            <div className='client'>
                <Link className='clientIcon'><TiShoppingCart/></Link>
            </div>
        </nav>
    )

}

export default navBar