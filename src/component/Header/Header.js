import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import CartIcon from '../Cart-icon/CartIcon';

//import logo from '../../assets/logo.jpg';
import Sidebar from '../SidebarNav/SidebarNav';
import NavLinks from '../NavLinks/NavLinks';
import CartDropdown from '../Cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ hidden }) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Fragment>
			<AppBar position='fixed'>
				<Toolbar disableGutters>
					<Button
						component={Link}
						to='/'
						disableRipple
						className={classes.logoContainer}
					></Button>{' '}
					{matches ? <Sidebar /> : <NavLinks />} <CartIcon />{' '}
					{hidden ? null : <CartDropdown />}{' '}
				</Toolbar>{' '}
			</AppBar>{' '}
			<div className={classes.toolbarMargin} />{' '}
		</Fragment>
	);
};
const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);

//In line styling
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '-10px',
	},
	logo: {
		height: '3rem',
	},
	logoContainer: {
		padding: '0',
		cursor: 'pointer',
	},
}));
