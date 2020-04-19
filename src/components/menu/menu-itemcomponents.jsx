import React from'react';
import './menu.scss';

const Menu =({title,imageUrl,size})=>(
    <div className={size+' menu'}>
        <div style={{
        backgroundImage:'url('+imageUrl+')'
        }} className='backgroundimg'></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='sub'>SHOP NOW</span>
        </div>
    </div>
);
export default Menu;