import React, { Fragment } from 'react';

import { useStyles } from './Hero.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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
				<Grid direction='column'>
					<Grid
						item
						className={`${miniBanner ? `${classes.miniBanner}` : ''} ${
							classes.banner
						}`}
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
							size='medium'
						></IconButton>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
}

Hero.defaultProps = {
	img: `https://i.ibb.co/bgXktj8/products-Bcg.jpg`,
};
