import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '-10px',
    },
    logo: {
        height: '3rem',
    },
    logoContainer: {
        padding: '0',
        cursor: 'pointer',
    },
}));