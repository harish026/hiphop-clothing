import React from 'react';
import './button.scss';

const Button =({children,...otherProps})=>(
    <button className='Button' {...otherProps}>
        {children}
    </button>
);
export default Button;
