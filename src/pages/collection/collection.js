import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../component/Collection-item/collectionItem';

import Hero from '../../component/Hero/Hero';

const CollectionPage = ({ collection }) => {
	const classes = useStyles();
	const { title, items } = collection;

	return (
		<div className={classes.collectionPage}>
			<Hero miniBanner title={title} />
			<div className={classes.items}>
				{' '}
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}{' '}
			</div>{' '}
		</div>
	);
};
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);

const useStyles = makeStyles(() => ({
	collectionPage: {
		display: 'flex',
		flexDirection: 'column',
	},

	items: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: '10px',
	},
	collectionItem: {
		marginBottom: '30px',
	},
}));
