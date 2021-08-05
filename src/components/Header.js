import React from 'react';
import { Typography, AppBar, Toolbar} from '@material-ui/core';
import useStyles from '../styles';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: '#E4A927' }}>
                <Toolbar className={classes.appBarWrapper}>
                    <Typography variant="h6" style={{ color: '#E02C28', flexGrow: '1' }} onClick={() =>
                    scroll.scrollToTop()}>
                        Domino's Pizza
                    </Typography>
                    {/* <IconButton>
                        <StorageSharpIcon className={classes.viewOrders}/>
                    </IconButton> */}
                    <Link className={classes.viewOrders} to="order" smooth={true} duration={1000}>
                        See Orders
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}