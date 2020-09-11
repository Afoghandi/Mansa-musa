import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    sidebarLink: {
        ...theme.typography.tab,
        minWidth: 150,
        fontSize: '250px',
        letterSpacing: '0.3rem',
        textTransform: 'capitalize',
        padding: '10.5rem, 1.5rem',
        background: 'transparent',
        color: theme.palette.primary.main,
        '&:hover': {
            borderColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
            border: ' 2px solid',
            cursor: 'pointer',
        },
        drawer: {
            width: 'drawerWidth',
            flexShrink: 0,
            anchor: 'left',
        },
    },
}));