import React, { useState } from 'react';
import SHOP_DATA from './shopdata';

import CollectionPreview from '../component/Collection-preview/CollectionPreview';

const ShopPage = () => {
	const [collections] = useState(SHOP_DATA);
	return (
		<div className='shopPage'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
