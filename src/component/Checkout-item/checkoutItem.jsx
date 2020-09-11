import React from 'react';
import { connect } from 'react-redux';

import { useStyles } from './CheckoutItem.styles';

import {
	clearItemFromCart,
	removeItem,
	addItem,
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	const classes = useStyles();
	return (
		<div className={classes.checkoutItem}>
			<div className={classes.imageContainer}>
				<img src={imageUrl} alt='item' className={classes.img} />
			</div>
			<span className={classes.name}>{name} </span>
			<span className={classes.quantity}>
				<div className={classes.arrow} onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>{' '}
				<span className={classes.value}> {quantity}</span>
				<div className={classes.arrow} onClick={() => addItem(cartItem)}>
					&#10095;
				</div>{' '}
			</span>
			<span className={classes.price}> {price}</span>
			<div className={classes.removeItem} onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};
const mapDispatachToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatachToProps)(CheckoutItem);
