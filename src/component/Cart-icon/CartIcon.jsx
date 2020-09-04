import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCartHidden, itemCount }) {
	const classes = useStyles();
	return (
		<IconButton aria-label='cart'>
			<div>
				<ShoppingCartIcon
					className={classes.shoppingIcon}
					onClick={toggleCartHidden}
				/>
				<span className={classes.itemCount}>{itemCount}</span>
			</div>
		</IconButton>
	);
}

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
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
