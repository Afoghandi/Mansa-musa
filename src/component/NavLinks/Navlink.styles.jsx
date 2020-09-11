import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    Link: {
        ...theme.typography.tab,
        minWidth: 10,
        cursor: 'pointer',
        color: 'white',
        fontSize: '1rem',
        marginTop: '12px',
        paddingLeft: '15px',
        paddingRight: '20px',
        textDecoration: 'none',
    },
}));