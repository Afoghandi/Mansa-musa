import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { linkData } from './LinkData';
import { auth } from '../../firebase/firebase.utils';

const NavLinks = ({ currentUser }) => {
	const classes = useStyles();

	const [value, setValue] = useState(0);
	const handleChange = (e, newValue) => {
		setValue(newValue);
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

	const tabs = (
		<Tabs
			className={classes.tabContainer}
			value={value}
			onChange={handleChange}
		>
			{linkData.map((link) => {
				return (
					<Tab
						key={link.id}
						className={classes.tab}
						component={Link}
						to={link.path}
						label={link.text}
					/>
				);
			})}
			{currentUser ? (
				<div onClick={() => auth.signOut()} className={classes.Link}>
					{' '}
					Sign Out
				</div>
			) : (
				<Link to='/signin' className={classes.Link}>
					{' '}
					Sign In
				</Link>
			)}
			<Tab icon={<ShoppingBasket color='secondary' />} />{' '}
		</Tabs>
	);

	return <Fragment> {tabs} </Fragment>;
};

export default NavLinks;

const useStyles = makeStyles((theme) => ({
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	Link: {
		...theme.typography.tab,
		minWidth: 10,
		//marginLeft: '5px',
		color: 'white',
		marginTop: '12px',
		paddingLeft: '5px',
	},
}));
