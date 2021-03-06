import React from 'react';
import './collection.scss';
import Collectionitem from '../collection-item/collection-item';

const Collection=({title,items})=>(
    <div className='collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,ind)=>ind<4)
                .map(({id,...itemProps})=>(
                    <Collectionitem key={id} {...itemProps}/>
                ))
            }

        </div>
    </div>
);
export default Collection;