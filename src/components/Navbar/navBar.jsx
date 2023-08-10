import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import {GoPerson} from 'react-icons/go';
import { BsCart } from 'react-icons/bs';

const navBar = () =>{
    return(
        <nav>
            <div className='notifier'>
                <p>New to Plants? Start <Link to='/plant' className='plantLink'>here</Link></p>
            </div>
            <div className='navBar'>
                <h1 className='logo'>PlantPalace</h1>

                {/* List of links to other pages */}

                <div className='Links'>
                    <Link className='Link' to='plant'>PLANTS</Link>
                    <Link className='Link' to='/careTools'>CARE TOOLS</Link>
                    <Link className='Link' to='/Gifts'>GIFTS</Link>
                    <Link className='Link' to='/Learn'>LEARN</Link>
                    <Link className='Link'to='/corporateGifts'>CORPORATE GIFTS</Link>
                </div>
                <div className='client'>
                    <Link className='clientIcon'><GoPerson /></Link>
                    <Link className='clientIcon'><BsCart/></Link>
                </div>
            </div>
        </nav>
    )

}

export default navBar