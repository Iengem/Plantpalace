import React from 'react';
import  '../topbar/TopBar.css';
import { AiFillCaretRight } from "react-icons/ai";

const TopBar = () => {
    return (
        <div className="topBar">
        <p className="p">Shop All Plants</p>
        <button>
          <p className="fir">SORT BY FEATURED</p>
          <p className="sec">Sort/Filter</p>
          <div>
            <AiFillCaretRight />
          </div>
        </button>
      </div>
    );
}

export default TopBar;
