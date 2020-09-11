import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
    collectionOverview: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '80%px',
            //marginLeft: '-25em',
        },
    },

    preview: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));