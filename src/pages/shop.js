import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../component/Collection-overview/CollectionsOverview';
import CollectionPage from './collection';

const ShopPage = ({ match }) => {
	return (
		<div className='shopPage'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
