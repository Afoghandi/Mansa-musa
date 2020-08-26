import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Title({ title, center }) {
	return (
		<Fragment>
			<Grid>
				<Grid>
					<Typography variant='h2'>{title} </Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
}
