import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import CartIcon from '../Cart-icon/CartIcon';

import logo from '../../img/icon/mm.jpg';
import Sidebar from '../SidebarNav/sidebarNav';
import NavLinks from '../NavLinks/NavLinks';
import CartDropdown from '../Cart-dropdown/CartDropdown';

const Header = () => {
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
					>
						<img src={logo} className={classes.logo} alt=' comany logo' />
					</Button>{' '}
					{matches ? <Sidebar /> : <NavLinks />} <CartIcon />
					<CartDropdown />
				</Toolbar>{' '}
			</AppBar>{' '}
			<div className={classes.toolbarMargin} />{' '}
		</Fragment>
	);
};
export default Header;

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

//elevation scroll for the navbar

/**function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}**/
