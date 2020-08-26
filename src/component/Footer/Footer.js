import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/icon/mm.jpg';
import { Grid } from '@material-ui/core';

export default function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Grid container className={classes.mainContainer}>
				<Grid item>
					<Grid container direction='column'>
						<Grid item className={classes.link}>
							Home
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid conatiner>
					<Grid item className={classes.link}>
						Services
					</Grid>
					<Grid item className={classes.link}>
						Custom
					</Grid>
					<Grid item className={classes.link}>
						mobile
					</Grid>
					<Grid item className={classes.link}>
						website
					</Grid>
				</Grid>
			</Grid>
			<img
				src={logo}
				alt='black decorative slash'
				className={classes.bottomLogo}
			/>{' '}
		</footer>
	);
}
const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		//zIndex: 1302,
		position: 'relative',
		width: '100%',
	},
	bottomLogo: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('xs')]: {
			width: '21em',
		},
		[theme.breakpoints.down('md')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Ariel',
		fontSize: '0.75',
		fontWeight: 'bold',
	},
}));
