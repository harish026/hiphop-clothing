import React from 'react';
import './header.scss';
import {ReactComponent as Logo } from '../../assets/hiphop.svg';
import {Link} from 'react-router-dom';

const Header =()=>(
    <div className='header'>
        <Link className='logo-link' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
        </div>

    </div>
);
export default Header;