import React from 'react';
import Menu from '../menu/menu-itemcomponents';
import './directory.scss';
class Directory extends React.Component {
    constructor(){
        super();

        this.state={
            sections:[
                {
                    title:'hats',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT10ghT5P2dlv8djjcR8uLc7Ay_9yZ2QOKn2PE2mdTo1o-b2a_n&usqp=CAU',
                    id: 1,
                    LinkUrl:'Hats'
                },
                {
                    title:'jackets',
                    imageUrl:'https://usplworld-static.s3.ap-south-1.amazonaws.com/static/img/wrogn/products/product_list/WHJK5130.jpeg',
                    id:2,
                    LinkUrl:'jackets'
                },
                {
                    title:'Sneakers',
                    imageUrl:'https://gearmoose.com/wp-content/uploads/2017/04/best-all-white-sneakers-for-men.jpg',
                    id:3,
                    LinkUrl:'sneakers'
                },
                {
                    title:'mens',
                    imageUrl:'https://www.casioindiashop.com/images/watches/mens-enticer-watches.jpg',
                    size:'large',
                    id:4,
                    LinkUrl:'mens'
                },
                {
                    title:'womens',
                    imageUrl:'https://image.uniqlo.com/UQ/ST3/eu/imagesother/2020/homepage/200326/pc-l2-womens-drape.jpg',
                    size:'large',
                    id:5,
                    LinkUrl:'womens'
                }
            ]   
        }
        
    }
    render() {
        return (
            <div className='directory'>
                {this.state.sections.map(({id,...othersectionsProps }) =>(
                    <Menu key={id} {...othersectionsProps} />
                ))}
            </div>
        )
    }

}
export default Directory;