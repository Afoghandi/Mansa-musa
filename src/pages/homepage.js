import React, { Fragment } from 'react';
import Hero from '../component/Hero/Hero';
import CustomButton from '../ui/CustomButton';
import Services from '../component/Services/Services';
import Directory from '../component/Directory/Directory';

export default function HomePage() {
    return ( <
        Fragment >
        <
        Hero title = 'Bring More to life'
        subtitle = 'with technology' > { ' ' } <
        CustomButton > Browse < /CustomButton>{' '} <
        /Hero>{' '} <
        Services / >
        <
        Directory / >
        <
        /Fragment>
    );
}