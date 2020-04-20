import React from 'react';
import Data from './data';
import Collection from '../../components/collection/collectioncomponents';

class Shoppage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: Data
        };
    }
    render(){
        return(
            <div className='shoppage'>
                {
                    this.state.collections.map(({id, ...othercollectionsProps}) =>(
                        <Collection key={id} {...othercollectionsProps} />
                    ))
                }
            </div>
        )
    }
}
export default Shoppage;