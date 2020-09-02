import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartHidden }) {
	const classes = useStyles();
	return (
		<IconButton aria-label='cart'>
			<div>
				<ShoppingCartIcon
					className={classes.shoppingIcon}
					onClick={toggleCartHidden}
				/>
				<span className={classes.itemCount}>0</span>
			</div>
		</IconButton>
	);
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
const useStyles = makeStyles((theme) => ({
	shoppingIcon: {
		right: 3,
		top: 13,
		fontSize: '40px',
		padding: '0 4px',
		color: 'white',
	},
	itemCount: {
		position: 'absolute',
		fontSize: '20px',
		fontWeight: 'bold',
		right: '30px',
		color: theme.palette.secondary.main,
	},
}));
