import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { linkData } from '../NavLinks/LinkData';

const Sidebar = () => {
	const classes = useStyles();
	const [openDrawer, setOpenDrawer] = useState(false);
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<List>
					{linkData.map((link) => {
						return (
							<ListItem
								divider
								button
								onClick={() => {
									setOpenDrawer(false);
								}}
								key={link.id}
								component={Link}
								to={link.path}
								label={link.text}
								className={classes.sidebarLink}
							>
								<ListItemText>{link.text} </ListItemText>{' '}
							</ListItem>
						);
					})}
				</List>
			</SwipeableDrawer>{' '}
			<IconButton
				justify='center'
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
				style={{ color: 'white' }}
			>
				<MenuIcon />{' '}
			</IconButton>{' '}
		</React.Fragment>
	);
	return <div> {drawer} </div>;
};
export default Sidebar;

const useStyles = makeStyles((theme) => ({
	sidebarLink: {
		...theme.typography.tab,
		minWidth: 150,
		fontSize: '250px',
		letterSpacing: '0.3rem',
		textTransform: 'capitalize',
		padding: '10.5rem, 1.5rem',
		background: 'transparent',
		color: theme.palette.primary.main,
		'&:hover': {
			borderColor: theme.palette.primary.main,
			color: theme.palette.secondary.main,
			border: ' 2px solid',
			cursor: 'pointer',
		},
		drawer: {
			width: 'drawerWidth',
			flexShrink: 0,
			anchor: 'left',
		},
	},
}));
