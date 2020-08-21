import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import logo from '../../img/icon/logo.jpg';
import Sidebar from '../sidebarNav/sidebarNav';
import styles from './Header.module.css';

//elevation scroll for the navbar

function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

//In line styling
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
	},

	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
}));

const Header = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === '/' && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === '/shop' && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === '/contact' && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === '/signin' && value !== 3) {
			setValue(3);
		}
	}, [value]);
	return (
		<Fragment>
			<ElevationScroll>
				<AppBar position='fixed'>
					<Toolbar disableGutters>
						<Button
							component={Link}
							to='/'
							disableRipple
							className={styles.logoContainer}
							onClick={() => setValue(0)}
						>
							<img src={logo} className={styles.logo} alt=' comany logo' />
						</Button>

						<Tabs
							className={classes.tabContainer}
							value={value}
							onChange={handleChange}
						>
							<Tab
								className={classes.tab}
								component={Link}
								to='/'
								label='Home'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/shop'
								label='Shop'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/contact'
								label='Contact'
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to='/signin'
								label='Sign In'
							/>
							<Tab icon={<ShoppingBasket color='secondary' />} />
						</Tabs>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
			<Sidebar />
		</Fragment>
	);
};
export default Header;
