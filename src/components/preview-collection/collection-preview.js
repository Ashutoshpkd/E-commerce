import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = (props) =>
(
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
            {props.items.filter((item,i) => i < 4).map(item => (
                <CollectionItem key={item.id} 
                imageUrl={item.imageUrl} name={item.name} price={item.price}/>))}
        </div>
    </div>
)

export default CollectionPreview;