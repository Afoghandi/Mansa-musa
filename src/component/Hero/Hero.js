import React, { Fragment } from 'react';
import mainBcg from '../../img/images/laptop/LP4.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';

export default function Hero({
	title,
	subtitle,
	children,
	img,
	miniBanner,
	...otherProps
}) {
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.heroWrapper}>
				<Grid container direction='column'>
					<Grid
						item
						className={`${miniBanner ? `${classes.miniBanner}` : ''} ${
							classes.banner
						}`}
						{...otherProps}
						{...otherProps}
						direction='column'
						style={{
							backgroundImage: `linear-gradient(rgba(25, 118, 210, 0.5), rgba(33,150,243, 0.7)),url(${img})`,
						}}
					>
						{' '}
						<Grid item>
							{' '}
							<Typography className={classes.title} variant='h1'>
								{title}
							</Typography>{' '}
							<Grid item className={classes.subtitle}>
								<Typography variant='h4'> {subtitle}</Typography>
							</Grid>
						</Grid>
						<Grid item>{children}</Grid>
						<IconButton
							aria-label='delete'
							className={classes.margin}
							size='large'
						></IconButton>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	heroWrapper: {
		flexGrow: 1,
		margin: '0 auto',
		marginBottom: '1rem',
		minWidth: '100%',
		//marginLeft: '10px',
	},
	banner: {
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',

		backgroundSize: 'cover',
	},
	miniBanner: {
		minHeight: '60vh',
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
		textTransform: 'capitalize',
		textShadow: '2px 2px',
		color: theme.palette.primary.main,
	},
	margin: {
		marginTop: '1rem',
		color: 'red',
	},
}));

Hero.defaultProps = {
	img: mainBcg,
};
