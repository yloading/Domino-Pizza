import React from 'react';
import { Typography, AppBar, Toolbar, IconButton} from '@material-ui/core';
import StorageSharpIcon from '@material-ui/icons/StorageSharp';
import useStyles from '../styles';

export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: '#E4A927' }}>
                <Toolbar className={classes.appBarWrapper}>
                    <Typography variant="h6" style={{ color: '#E02C28', flexGrow: '1' }}>
                        Domino's Pizza
                    </Typography>
                    <IconButton>
                        <StorageSharpIcon className={classes.viewOrders}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}