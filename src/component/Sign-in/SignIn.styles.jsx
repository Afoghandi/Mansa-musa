import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    signInWrapper: {
        width: '800px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '600px',
            marginTop: '40em',
            position: 'relative',
            marginRight: '10px',
        },

        [theme.breakpoints.down('sm')]: {
            width: '600px',
            marginTop: '40em',
            position: 'relative',
            marginLeft: '-9em',
        },
    },

    buttons: {
        marginLeft: '2px',
    },
}));