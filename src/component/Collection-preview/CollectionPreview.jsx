import React, { Fragment } from 'react';

import CollectionItem from '../Collection-item/collectionItem';
import Title from '../../ui/Title';
import { useStyles } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.collectionPreview}>
				<Title title={title.toUpperCase()} />
				<div className={classes.preview}>
					{' '}
					{items
						.filter((item, idx) => idx < 4)
						.map((item) => (
							<CollectionItem key={item.id} item={item} />
						))}{' '}
				</div>{' '}
				=
			</div>{' '}
		</Fragment>
	);
};

export default CollectionPreview;
