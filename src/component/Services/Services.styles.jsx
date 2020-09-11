import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    serviceWrapper: {
        flexGrow: 1,
        minWidth: '100%',
        paddingBottom: '7rem',
        paddingTop: '4rem',
        backgroundColor: theme.palette.lightBlue.lightBlue,
        display: 'flex',
    },
    paper: {
        height: 350,
        width: 370,
        color: 'white',
        //
        marginBottom: '1rem',
        paddingBottom: '3rem',
    },
    icon: {
        color: theme.palette.secondary.main,

        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    text: {
        ...theme.typography.p,
        color: theme.palette.black.black,
    },
}));