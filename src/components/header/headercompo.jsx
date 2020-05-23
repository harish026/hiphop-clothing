import React from 'react';
import './header.scss';
import {ReactComponent as Logo } from '../../assets/hiphop.svg';
import {Link} from 'react-router-dom';
import {auth } from '../../firebase/firebase';

const Header =({currentUser})=>(
    <div className='header'>
        <Link className='logo-link' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {currentUser ?(
                <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
            ) : (
                <Link className='option' to='/signin'>SIGNIN</Link>
            )}
        </div>

    </div>
);
export default Header;