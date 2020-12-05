import React from 'react';
import './shoppage.scss';
import SHOP_DATA from './shopdata.js';
import CollectionPreview from '../../components/preview-collection/collection-preview';

class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            collections: SHOP_DATA,
        }
    }

    render()
    {
        return(
            <div>
                {
                    this.state.collections.map(collection => (
                        <CollectionPreview key={collection.id} title={collection.title}
                         name={collection.name} items={collection.items}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;