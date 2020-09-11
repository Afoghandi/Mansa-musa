import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    shoppingIcon: {
        right: 3,
        top: 13,
        fontSize: '40px',
        padding: '0 4px',
        color: 'white',
    },
    itemCount: {
        position: 'absolute',
        fontSize: '20px',
        fontWeight: 'bold',
        right: '30px',
        color: theme.palette.secondary.main,
    },
}));