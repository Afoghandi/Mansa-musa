import { createMuiTheme } from '@material-ui/core/styles';

const main = '#1976D2';
const secondary = '#ff7043';
const blueBody = '#2196F3';
const mainGray = '#757575';
const lightBlue = '#BBDEFB';
const black = '#212121';

export default createMuiTheme({
    palette: {
        primary: {
            main: `${main}`,
        },
        secondary: {
            main: `${secondary}`,
        },
        blueBody: {
            body: `${blueBody}`,
        },
        mainGray: {
            mainGray: `${mainGray}`,
        },
        lightBlue: {
            lightBlue: `${lightBlue}`,
        },
        black: {
            black: `${black}`,
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
            color: `${secondary}`,
            textTransform: 'capitalize',
        },

        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            letterSpacing: '0.3rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: `${mainGray}`,
            textTransform: 'capitalize',
            paddingTop: '1rem',
            paddingBottom: '2rem',
            fontSize: '2rem',
        },
        h4: {
            fontFamily: 'Lato',
            letterSpacing: '0.3rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
        },
        h6: {
            fontFamily: 'Lato',
            letterSpacing: '0.3rem',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: `${mainGray}`,
            textTransform: 'capitalize',
        },
        p: {
            fontFamily: 'Open Sans',

            fontSize: '1.1rem',
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