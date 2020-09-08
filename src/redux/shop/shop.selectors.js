import memoize from 'lodash.memoize';

import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;
export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

//convert object into an array
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map((key) => collections[key])
);

//Data nomalisation
export const selectCollection = memoize((collectionUrlParam) => {
	return createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	);
});
