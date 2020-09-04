import React from 'react';

import { makeStyles } from '@material-ui/styles';

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
const useStyles = makeStyles((theme) => ({
	cartItem: {
		width: '100%',
		display: 'flex',
		height: '80px',
		marginBottom: '15px',
	},
	img: {
		width: '30%',
	},
	itemDetails: {
		width: '70%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: '10px, 20px',
	},
	name: {
		fontSize: '16px',
		marginLeft: '5px',
	},
	price: {
		marginLeft: '5px',
	},
}));
export default CartItem;
