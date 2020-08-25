import React from 'react';
import mainBcg from '../../img/images/laptop/LP4.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

export default function Hero({ img, title, subtitle, max, children }) {
	const classes = useStyles();

	return (
		<Grid container direction='column' className={classes.heroWrapper}>
			<Grid item className={classes.banner} direction='column'>
				{' '}
				<Grid item direction='row'>
					{' '}
					<Typography className={classes.title} variant='h1'>
						{title}
					</Typography>{' '}
					<Grid item className={classes.subtitle}>
						<Typography variant='h4'> {subtitle}</Typography>
					</Grid>
				</Grid>
				<Grid justify='flex-start' item>
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
}

const useStyles = makeStyles((theme) => ({
	heroWrapper: {
		flexGrow: 1,
		minHeight: '100vh',
		marginBottom: '1rem',
	},
	banner: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundImage: `url(${mainBcg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
	title: {
		...theme.typography.title,
		fontSize: 56,
		padding: theme.spacing(10),
		paddingBottom: '1rem',
		marginBottom: '10px',
	},
	subtitle: {
		...theme.typography.title,
		paddingBottom: '10px',
		marginBottom: '30px',
		color: theme.palette.primary.main,
	},
}));
