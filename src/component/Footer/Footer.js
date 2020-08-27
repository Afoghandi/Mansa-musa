import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../img/icon/mm.jpg';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../img/icon/facebook.svg';
import instagram from '../../img/icon/instagram.svg';
import whatsapp from '../../img/icon/whatsapp.svg';

export default function Footer() {
	const Links = [
		[
			{ name: 'facebook' },
			{
				icon: `${facebook}`,
			},
		],
		[
			{ name: 'Instagram' },
			{
				icon: `${instagram}`,
			},
		],
		[{ name: 'Contact' }],
		[{ name: 'About us' }],
	];
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid container justify='center' className={classes.mainContainer}>
					{Links.map((linkGroup) => (
						<Grid item className={classes.gridItem}>
							<Grid container direction='column' spacing={2}>
								{linkGroup.map((link) => (
									<Grid item className={classes.link}>
										{link.name}
									</Grid>
								))}
							</Grid>
						</Grid>
					))}
				</Grid>
			</Hidden>
			<img
				src={logo}
				alt='black decorative slash'
				className={classes.bottomLogo}
			/>{' '}
			<Grid
				container
				justify='flex-end'
				spacing={2}
				className={classes.socialContainer}
			>
				<Grid item>
					<img
						src={facebook}
						component={'a'}
						href='www.facebook.com'
						alt='facebook logo'
						className={classes.icon}
						rel='noopener noreferre'
						target='_blank'
					/>
				</Grid>
				<Grid item>
					<img
						src={whatsapp}
						component={'a'}
						href='www.facebook.com'
						alt='whatsapp logo'
						className={classes.icon}
						rel='noopener noreferre'
						target='_blank'
					/>
				</Grid>
				<Grid item>
					<img
						src={instagram}
						component={'a'}
						href='www.facebook.com'
						alt='instagram logo'
						className={classes.icon}
						rel='noopener noreferre'
						target='_blank'
					/>
				</Grid>
			</Grid>
		</footer>
	);
}
const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.lightBlue.lightBlue,
		zIndex: 1302,
		position: 'relative',
		width: '100%',
	},
	bottomLogo: {
		width: '15em',
		verticalAlign: 'bottom',
		minHeight: '80px',
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
		color: '#212121',
		fontFamily: 'Lato',
		fontSize: '1rem',
		textTransform: 'capitalize',
		fontWeight: 'bold',
	},
	gridItem: {
		margin: '2em',
	},
	icon: {
		height: '2em',
		width: '5em',
		marginTop: '12px',
		[theme.breakpoints.down('xs')]: {
			width: '3em',
		},
	},
	socialContainer: {
		position: 'absolute',
		right: '1.5em',
		marginTop: '-4.3em',
		[theme.breakpoints.down('xs')]: {
			marginTop: '-4.3em',
		},
	},
}));
