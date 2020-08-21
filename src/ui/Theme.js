import { createMuiTheme } from '@material-ui/core/styles';

const arcDarkOrange = '#303F9F';
const arcOrange = '#FF5252';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcDarkOrange}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcDarkOrange}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Open Sans Condensed',
            fontSize: '1rem',
        },
    },
});