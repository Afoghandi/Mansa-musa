import React from 'react';
import { useStyles } from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	const classes = useStyles();

	return (
		<div className={classes.cartItem}>
			<img src={imageUrl} alt='item' className={classes.img} />
			<div className={classes.itemDetails}>
				<span className={classes.name}>{name} </span>
				<span className={classes.price}>
					{quantity} x £{price}{' '}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
