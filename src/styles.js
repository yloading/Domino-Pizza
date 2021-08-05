import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pizza.jpeg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    },
    text: {
        color: '#fafafa',
    },
    appBarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    button: {
        margin: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        fontWeight: '2px'
    },
    viewOrders: {
        color: '#E02C28'
    },
    modalButtons: {
        marginTop: '2px'
    },
    ordersContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default useStyles;