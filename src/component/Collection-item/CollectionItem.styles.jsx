import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    collectionItem: {
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        width: '22vw',
        display: 'flex',
        flexDirection: 'column',
        height: '370px',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            //marginLeft: '-25em',
        },
    },

    customButton: {
        width: '80%',
        opacity: '0.7',
        position: 'absolute',
        top: '255px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '10px',

            //marginLeft: '-25em',
        },
    },
    '&:hover': {
        '& image': {
            opacity: '0.8',
        },
        '& customButton': {
            opacity: '0.85',
            display: 'flex',
        },
    },
    image: {
        width: '100%',
        height: '95%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '5px',
    },
    collectionFooter: {
        width: '100%',
        height: '5%',
        display: ' flex',
        justifyContent: 'space-between',
        fontSize: '18px',
    },
    name: {
        width: '85%',
        marginBottom: '20px',
        marginLeft: '5px',
    },

    price: {
        width: '15%',
    },
}));