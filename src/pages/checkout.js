import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

import { makeStyles } from '@material-ui/styles';

import CheckoutItem from '../component/Checkout-item/checkoutItem';

const CheckoutPage = ({ cartItems, total }) => {
	const classes = useStyles();

	return (
		<div className={classes.checkoutPage}>
			<div className={classes.checkoutHeader}>
				<div className={classes.headerBlock}>
					<span>Product</span>
				</div>
				<div className={classes.headerBlock}>
					<span>Description</span>
				</div>
				<div className={classes.headerBlock}>
					<span>Quantity</span>
				</div>
				<div className={classes.headerBlock}>
					<span>Price</span>
				</div>
				<div className={classes.remove}>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className={classes.total}>
				<span> £{total} </span>
			</div>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);

//Styles
const useStyles = makeStyles(() => ({
	checkoutPage: {
		width: '55%',
		minHeight: '90vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '50px auto 0',
	},
	checkoutHeader: {
		width: '100%',
		padding: '10px 0',
		display: 'flex',
		justifyContent: 'space-between',
		borderBottom: '1px solid darkgrey',
	},
	headerBlock: {
		textTransform: 'capitalize',
		width: '23%',
		'&:lastChild': {
			width: '8%',
		},
	},
	remove: {
		textTransform: 'capitalize',

		width: '8%',
	},
	total: {
		marginTop: '30px',
		marginLeft: 'auto',
		fontSize: '36px',
	},
}));
