import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    collectionPreview: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            //marginLeft: '-25em',
        },
    },

    preview: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));