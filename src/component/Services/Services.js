import React, { Fragment } from 'react';
import Title from '../../ui/Title';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import EuroSharpIcon from '@material-ui/icons/EuroSharp';
import Replay30Icon from '@material-ui/icons/Replay30';
import LocalShippingSharpIcon from '@material-ui/icons/LocalShippingSharp';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './Services.styles';

const ServiceData = [
	{
		id: 1,
		icon: <Replay30Icon />,
		header: 'easy return',
		text: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has Contrary to popular belief, Lorem Ipsum 
		is not simply random text. It has serviceWrappers in a piece of classical Latin 
		literature from 45 BC, making it over 2000 years old. Richard McClintock, 
		a Latin professor at Hampden-Sydney College in Virginia, looked up one of
		 the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
	 `,
	},
	{
		id: 2,
		icon: <EuroSharpIcon />,
		header: 'Secure payments',
		text: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has Contrary to popular belief, Lorem Ipsum 
		is not simply random text. It has serviceWrappers in a piece of classical Latin 
		literature from 45 BC, making it over 2000 years old. Richard McClintock, 
		a Latin professor at Hampden-Sydney College in Virginia, looked up one of
		 the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
	 `,
	},
	{
		id: 3,
		icon: <LocalShippingSharpIcon />,
		header: 'Quick Delivery',
		text: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has Contrary to popular belief, Lorem Ipsum 
		is not simply random text. It has serviceWrappers in a piece of classical Latin 
		literature from 45 BC, making it over 2000 years old. Richard McClintock, 
		a Latin professor at Hampden-Sydney College in Virginia, looked up one of
		 the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
	 `,
	},
];
export default function Services() {
	const [spacing] = React.useState(5);
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.serviceWrapper}>
				<Grid container spacing={spacing}>
					<Grid item xs={12}>
						<Title title='Our services' />
						<Grid container justify='center' direction='row' spacing={spacing}>
							{' '}
							{ServiceData.map((item) => {
								return (
									<Grid item key={item.id}>
										<Paper className={classes.paper} align='center'>
											<Grid item className={classes.icon}>
												{' '}
												{item.icon}{' '}
											</Grid>{' '}
											<Typography variant='h6'> {item.header} </Typography>{' '}
											<Typography className={classes.text}>
												{' '}
												{item.text}{' '}
											</Typography>{' '}
											<p> </p>{' '}
										</Paper>{' '}
									</Grid>
								);
							})}{' '}
						</Grid>{' '}
						<Paper elevation={0} /> <Paper />
					</Grid>{' '}
				</Grid>{' '}
			</div>{' '}
		</Fragment>
	);
}
