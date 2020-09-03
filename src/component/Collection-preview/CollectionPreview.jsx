import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import CollectionItem from '../Collection-item/collectionItem';

const CollectionPreview = ({ title, items }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.collectionPreview}>
				<Typography variant='h2'> {title.toUpperCase()} </Typography>{' '}
				<div className={classes.preview}>
					{' '}
					{items
						.filter((item, idx) => idx < 4)
						.map(({ id, ...otherItemProps }) => (
							<CollectionItem key={id} {...otherItemProps} />
						))}{' '}
				</div>{' '}
			</div>{' '}
		</Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
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
export default CollectionPreview;
