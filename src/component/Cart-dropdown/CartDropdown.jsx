import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../../ui/CustomButton';
import CartItem from '../Cart-item/CartItem';

const CartDropdown = ({ cartItems }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Paper className={classes.cartDropdown} elevation={3}>
				<div className={classes.cartItems} />
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
				<CustomButton> Go to checkout </CustomButton>{' '}
			</Paper>
		</Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	cartDropdown: {
		position: 'absolute',

		width: '240px',
		height: '340px',
		display: 'flex',
		flexDirection: ' column',
		padding: '20px',

		backgroundColor: 'white',
		top: '80px',
		right: '0',
		zIndex: '5',
	},
	cartItems: {
		height: ' 3000px',
		display: 'flex',
		flexDirection: ' column',
		overflow: 'scroll',
	},
}));

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
