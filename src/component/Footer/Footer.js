import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../img/icon/facebook.svg';
import instagram from '../../img/icon/instagram.svg';
import whatsapp from '../../img/icon/whatsapp.svg';
import Divider from '@material-ui/core/Divider';

export default function Footer() {
	const Links = [
		[
			{ name: 'Get Support' },

			{ sub1: '0145-567-789' },
			{
				sub2: '+44 0786-778-666',
			},
		],
		[
			{ name: 'work with us' },
			{
				sub1: ` we are one of the leading employers in the UK`,
			},
		],
		[{ name: 'Contact Us' }],
		[{ name: 'About us' }],
	];
	const classes = useStyles();
	const [spacing] = React.useState(10);
	return (
		<Fragment>
			<Grid
				container
				spacing={spacing}
				className={classes.footer}
				justify='center'
			>
				<Grid item align='center'>
					<Hidden mdDown>
						<Grid container justify='center' className={classes.mainContainer}>
							{' '}
							{Links.map((linkGroup) => (
								<Grid item className={classes.gridItem}>
									<Grid container direction='column' spacing={2}>
										{' '}
										{linkGroup.map((link) => (
											<Grid item className={classes.link}>
												<h4>{link.name} </h4>
												<Divider />
												{link.sub1} {link.sub2}
											</Grid>
										))}{' '}
									</Grid>{' '}
								</Grid>
							))}{' '}
						</Grid>{' '}
					</Hidden>{' '}
				</Grid>
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
					</Grid>{' '}
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
					</Grid>{' '}
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
					</Grid>{' '}
				</Grid>{' '}
			</Grid>
		</Fragment>
	);
}
const useStyles = makeStyles((theme) => ({
	footer: {
		flexGrow: 1,

		marginTop: '2em',
	},

	mainContainer: {
		[theme.breakpoints.down('md')]: {
			justify: 'flex-start',
		},
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
		[theme.breakpoints.down('md')]: {
			width: '8em',
			height: '2em',
			marginTop: '-19em',
			marginLeft: '3em',
			paddingLeft: '1em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '3em',
		},
	},
	socialContainer: {
		position: 'absolute',
		right: '1.5em',
		marginTop: '7em',
		[theme.breakpoints.down('xs')]: {
			marginTop: '-1.3em',
			marginRight: '7.3em',
		},
	},
}));
