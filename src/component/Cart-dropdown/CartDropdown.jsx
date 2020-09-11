import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { useStyles } from './CartDropdown.styles';
import Paper from '@material-ui/core/Paper';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../../ui/CustomButton';
import CartItem from '../Cart-item/CartItem';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Paper className={classes.cartDropdown} elevation={3}>
				<div className={classes.cartItems} />
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className={classes.emptyMessage}> Your Cart is empty</span>
				)}
				<CustomButton
					className={classes.button}
					onClick={() => {
						history.push('/checkout');
						dispatch(toggleCartHidden());
					}}
				>
					{' '}
					Go to checkout{' '}
				</CustomButton>{' '}
			</Paper>
		</Fragment>
	);
};
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
