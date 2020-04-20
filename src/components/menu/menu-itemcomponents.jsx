import React from'react';
import {withRouter} from 'react-router-dom';
import './menu.scss';

const Menu =({title,imageUrl,size,history,LinkUrl,match})=>(
    <div className={size+' menu'} onClick={()=> history.push(match.url+LinkUrl)}>
        <div style={{
        backgroundImage:'url('+imageUrl+')'
        }} className='backgroundimg'></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='sub'>SHOP NOW</span>
        </div>
    </div>
);
export default withRouter(Menu);