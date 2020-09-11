import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
    cartDropdown: {
        position: 'absolute',
        width: '240px',
        height: '340px',
        display: 'flex',
        flexDirection: ' column',
        padding: '20px',
        overflow: 'scroll',
        backgroundColor: 'white',
        top: '80px',
        right: '0',
        zIndex: '5',
    },
    cartItems: {
        height: ' 240px',
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        marginTop: 'auto',
    },
    emptyMessage: {
        fontSize: '18px',
        margin: '50px auto',
    },
}));