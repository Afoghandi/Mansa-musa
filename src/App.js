import React from 'react';
import { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './component/Header/Header';

import theme from './ui/Theme';

//import styles from './App.module.css';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<ThemeProvider theme={theme}>
					<Header />

					{[...new Array(200)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
						)
						.join('\n')}
				</ThemeProvider>
			</Fragment>
		);
	}
}

export default App;
