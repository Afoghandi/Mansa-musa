import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    heroWrapper: {
        flexGrow: 1,
        margin: '0 auto',
        marginBottom: '1rem',
        minWidth: '100%',
        marginLeft: '10px',
    },
    banner: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',

        backgroundSize: 'cover',
    },
    miniBanner: {
        minHeight: '60vh',
    },

    title: {
        ...theme.typography.title,
        fontSize: 56,
        padding: theme.spacing(10),
        paddingBottom: '1rem',
        marginBottom: '10px',
    },
    subtitle: {
        ...theme.typography.title,
        paddingBottom: '10px',
        marginBottom: '30px',
        textTransform: 'capitalize',
        textShadow: '2px 2px',
        color: theme.palette.primary.main,
    },
    margin: {
        marginTop: '1rem',
        color: 'red',
    },
}));