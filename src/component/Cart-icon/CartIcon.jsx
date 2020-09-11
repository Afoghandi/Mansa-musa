import React from 'react';
import { createStructuredSelector } from 'reselect';

import { useStyles } from './CartIcon.styles';
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

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
