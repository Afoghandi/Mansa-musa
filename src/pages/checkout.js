import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

import { makeStyles } from '@material-ui/styles';

import CheckoutItem from '../component/Checkout-item/checkoutItem';
import StripeCheckoutButton from '../component/stripeButton/stripeButton';

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
			<div className={classes.total}>Total: £{total}</div>
			<div className={classes.testWarning}>
				* Please use the following test credit card for payments*
				<br />
				2223 0031 2200 3222 - Exp:10/21 - CVV:123
			</div>
			<StripeCheckoutButton className={classes.stripeBtn} price={total} />
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
	stripeBtn: {
		marginLeft: 'auto',
		marginTop: '50px',
	},
	testWarning: {
		textAlign: 'center',
		marginTop: '40px',
		fontSize: '24px',
		color: 'red',
	},
}));
