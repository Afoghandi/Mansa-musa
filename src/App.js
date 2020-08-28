import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import Header from './component/Header/Header';

import { homepage, shop, signInSignOut, contact } from './pages';

import theme from './ui/Theme';

//import styles from './App.module.css';

class App extends React.Component {
    render() {
        /**    	<ThemeProvider theme={theme}>
        			<BrowserRouter>
        				<Header />
        				<Switch>
        					<Route exact path='/' component={homepage} />{' '}
        				</Switch>{' '}
        				<Footer />
        			</BrowserRouter>{' '}
        		</ThemeProvider>{' '} */
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
            />{' '} <
            Route exact path = '/shop'
            component = { shop }
            />{' '} <
            Route exact path = '/signin'
            component = { signInSignOut }
            />{' '} <
            Route exact path = '/contact'
            component = { contact }
            />{' '} <
            /Switch>{' '} <
            /BrowserRouter>{' '} <
            /ThemeProvider>{' '} <
            /Fragment>
        );
    }
}

export default App;