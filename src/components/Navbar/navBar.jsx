import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {GoPerson} from 'react-icons/go';
import { BsCart } from 'react-icons/bs';

const NavBar = () =>{
    return(
        <nav>
            <h1 className='logo'>PlantPalace</h1>
            {/* List of links to other pages */}
            <div className='Links'>
                <Link className='Link' to='/Plants'>PLANTS</Link>
                <Link className='Link' to='/careTools'>CARE TOOLS</Link>
                <Link className='Link' to='/Gifts'>GIFTS</Link>
                <Link className='Link' to='/Learn'>LEARN</Link>
                <Link className='Link'to='/corporateGifts'>CORPORATE GIFTS</Link>
            </div>
            <div className='client'>
                <Link className='clientIcon'><GoPerson /></Link>
                <Link className='clientIcon'><BsCart/></Link>
            </div>
        </nav>
    )

}

export default NavBar;