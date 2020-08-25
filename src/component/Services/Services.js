import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import EuroSharpIcon from '@material-ui/icons/EuroSharp';
import Replay30Icon from '@material-ui/icons/Replay30';
import LocalShippingSharpIcon from '@material-ui/icons/LocalShippingSharp';
import Paper from '@material-ui/core/Paper';

const ServiceData = [
	{
		id: 1,
		icon: <Replay30Icon />,
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has `,
	},
	{
		id: 2,
		icon: <EuroSharpIcon />,
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has `,
	},
	{
		id: 3,
		icon: <LocalShippingSharpIcon />,
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has `,
	},
];
export default function Services() {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
	return (
		<Fragment>
			<Hero title='Our Services' />
			<Grid Container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container justify='center' spacing={spacing}>
						{ServiceData.map((item) => {
							return (
								<Grid item key={item.id}>
									<Grid item>{item.icon}</Grid>
									<Paper className={classes.paper}> {item.text}</Paper>{' '}
								</Grid>
							);
						})}
					</Grid>

					<Paper elevation={0} />
					<Paper />
				</Grid>{' '}
				heee{' '}
			</Grid>
		</Fragment>
	);
}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 350,
		width: 350,
	},
	control: {
		padding: theme.spacing(2),
	},
}));
