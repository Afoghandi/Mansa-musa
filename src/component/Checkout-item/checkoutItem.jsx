import React from 'react';

import { makeStyles } from '@material-ui/styles';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
	const classes = useStyles();
	return (
		<div className={classes.checkoutItem}>
			<div className={classes.imageContainer}>
				<img src={imageUrl} alt='item' className={classes.img} />
			</div>
			<span style={{ width: '23%' }}>{name} </span>
			<span style={{ width: '23%', paddingLeft: '20px' }}>{quantity} </span>
			<span style={{ width: '23%' }}> {price}</span>
			<div style={{ paddingLeft: '12px', cursor: 'pointer' }}>&#10005;</div>
		</div>
	);
};
export default CheckoutItem;

//styles
const useStyles = makeStyles(() => ({
	checkoutItem: {
		width: '100%',
		display: 'flex',
		minHeight: '100px',
		borderBottom: '1px solid darkgrey',
		padding: '15px 0',
		fontSize: '20px',
		alignItems: 'center',
	},
	imageContainer: {
		width: '20%',
		paddingRight: '15px',
	},

	img: {
		width: '100%',
		height: '100%',
	},
	'name,quantity,price': {
		width: '23%',
	},
}));
