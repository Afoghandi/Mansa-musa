import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#303F9F';
const arcOrange = '#FF5722';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,

            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
        typography: {
            h3: {
                fontWeight: 300,
            },
        },
    },
});