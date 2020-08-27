import React, { Fragment } from 'react';
import Hero from '../component/Hero/Hero';
import CustomButton from '../ui/CustomButton';
import Services from '../component/Services/Services';
import Directory from '../component/Directory/Directory';
import mainBcg from '../img/images/background/productsBcg.jpeg';

export default function HomePage() {
	return (
		<Fragment>
			<Hero title='Bring More to life' subtitle='with technology' img={mainBcg}>
				{' '}
				<CustomButton> Browse </CustomButton>{' '}
			</Hero>{' '}
			<Services />
			<Directory />
		</Fragment>
	);
}
