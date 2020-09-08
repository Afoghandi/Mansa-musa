import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../Collection-preview/CollectionPreview';

import { makeStyles } from '@material-ui/styles';

const CollectionOverview = ({ collections }) => {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.collectionOverview}>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>{' '}
		</Fragment>
	);
};
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);

//styles

const useStyles = makeStyles(() => ({
	collectionOverview: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '30px',
	},

	preview: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));
