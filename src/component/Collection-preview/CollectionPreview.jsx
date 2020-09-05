import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';

import CollectionItem from '../Collection-item/collectionItem';
import Title from '../../ui/Title';

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
			</div>{' '}
		</Fragment>
	);
};

export default CollectionPreview;

//styles

const useStyles = makeStyles(() => ({
	collectionPreview: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '30px',
	},

	preview: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));
