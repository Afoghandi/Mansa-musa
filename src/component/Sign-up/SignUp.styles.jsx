import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    signUpWrapper: {
        width: '800px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '800px',
            marginLeft: '-20em',
        },
        [theme.breakpoints.down('sm')]: {
            width: '800px',
            marginLeft: '-25em',
        },
    },

    signUp: {},
}));