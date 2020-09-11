import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import { useStyles } from './CollectionItem.styles';

import CustomButton from '../../ui/CustomButton';

const CollectionItems = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.collectionItem}>
				<div
					className={classes.image}
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>{' '}
				<div className={classes.collectionFooter}>
					<span className={classes.name}> {name} </span>{' '}
					<span className={classes.price}> £{price} </span>{' '}
				</div>{' '}
				<CustomButton
					className={classes.customButton}
					onClick={() => addItem(item)}
				>
					{' '}
					Add to cart{' '}
				</CustomButton>{' '}
			</div>{' '}
		</Fragment>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItems));
