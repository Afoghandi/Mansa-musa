import { createMuiTheme } from '@material-ui/core/styles';

const main = '#1976D2';
const secondary = '#ff7043';

export default createMuiTheme({
    palette: {
        primary: {
            main: `${main}`,
        },
        secondary: {
            main: `${secondary}`,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Open Sans Condensed',
            fontSize: '1rem',
        },
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            letterSpacing: '0.3rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textTransform: 'capitalize',
        },
        h4: {
            fontFamily: 'Lato',
        },
        p: {
            fontFamily: 'Open Sans',
            color: '#212121',
        },
        button: {
            minWidth: '165px',
            width: 'auto',
            height: '50px',
            letterSpacing: '0.7px',
            lineHeight: '50px',
            padding: '0 35px 0 35px',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            fontFamily: 'Open Sans Condensed',
            fontWeight: 'bolder',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
        },
    },
});