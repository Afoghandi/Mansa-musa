import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(() => ({
    checkoutItem: {
        width: '100%',
        display: 'flex',
        minHeight: '100px',
        borderBottom: '1px solid darkgrey',
        padding: '15px 0',
        fontSize: '20px',
        alignItems: 'center',
    },
    imageContainer: {
        width: '20%',
        paddingRight: '15px',
    },

    img: {
        width: '100%',
        height: '100%',
    },
    name: {
        width: '23%',
    },
    quantity: {
        width: '23%',
        paddingLeft: '20px',
        display: 'flex',
    },

    price: {
        width: '23%',
    },
    removeItem: { paddingLeft: '12px', cursor: 'pointer' },

    arrow: { cursor: 'pointer' },
    value: {
        margin: '0 10px',
    },
}));