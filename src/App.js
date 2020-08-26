import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { homepage, shop, signInSignOut, contact } from './pages';

import theme from './ui/Theme';

//import styles from './App.module.css';

class App extends React.Component {
    render() {
        return ( <
            Fragment >
            <
            ThemeProvider theme = { theme } >
            <
            BrowserRouter >
            <
            Header / >
            <
            Switch >
            <
            Route exact path = '/'
            component = { homepage }
            /> <
            Route exact path = '/shop'
            component = { shop }
            /> <
            Route exact path = '/signin'
            component = { signInSignOut }
            /> <
            Route exact path = '/contact'
            component = { contact }
            /> <
            /Switch> <
            Footer / >
            <
            /BrowserRouter> <
            /ThemeProvider>{' '} <
            /Fragment>
        );
    }
}

export default App;