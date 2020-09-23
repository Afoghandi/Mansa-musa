import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    formGroupWrap: {
        position: 'relative',
        margin: '45px 0',
    },
    formInput: {
        width: '100%',
        fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));