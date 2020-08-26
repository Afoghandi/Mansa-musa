import React, { Fragment } from 'react';
import Title from '../../ui/Title';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import EuroSharpIcon from '@material-ui/icons/EuroSharp';
import Replay30Icon from '@material-ui/icons/Replay30';
import LocalShippingSharpIcon from '@material-ui/icons/LocalShippingSharp';
import Paper from '@material-ui/core/Paper';

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
	const [spacing] = React.useState(2);
	const classes = useStyles();
	return (
		<Fragment>
			<Grid Container className={classes.serviceWrapper} spacing={2}>
				<Grid item xs={12}>
					<Title title='Our services' />
					<Grid container justify='center' spacing={spacing}>
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
										<Typography className={classes.text} variant='p'>
											{' '}
											{item.text}{' '}
										</Typography>{' '}
										<p> </p>{' '}
									</Paper>{' '}
								</Grid>
							);
						})}{' '}
					</Grid>
					<Paper elevation={0} /> <Paper />
				</Grid>{' '}
			</Grid>{' '}
		</Fragment>
	);
}
const useStyles = makeStyles((theme) => ({
	serviceWrapper: {
		flexGrow: 1,

		paddingBottom: '4rem',
		paddingTop: '4rem',
	},
	paper: {
		height: 350,
		width: 370,
		color: 'white',
		backgroundColor: theme.palette.lightBlue.lightBlue,
		marginBottom: '1rem',
		paddingBottom: '3rem',
	},
	icon: {
		color: theme.palette.secondary.main,

		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		marginBottom: '1rem',
	},
	text: {
		...theme.typography.p,
		color: theme.palette.black.black,
	},
	control: {
		padding: theme.spacing(2),
	},
}));
