import React from 'react'
import {Link} from "react-router-dom";
import './Header.css';

export const Header = ({card}) => {
  return (
    <div>
        <div className="navbar">
    <div className="logo">Food cart</div>
    <ul>
        <li>
           <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"cart"} > <span className='count'>{card.length}</span>View cart</Link>
        </li>
    </ul>
    </div>
    
    </div>
  )
}
