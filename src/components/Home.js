import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

import useStyles from '../styles';

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <div>
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: "90vh" }}>
            <Grid item>
                <Typography className={classes.text} variant="h2" align="center" gutterBottom>
                    TRIPLE THE FUN IN EVERY BITE!
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.text} variant="h5" align="center" paragraph>
                    Weve changed our delivery areas to better serve you!
                </Typography>
            </Grid>
            <Grid item>
                <Fab variant="extended" style={{ backgroundColor: '#E4A927' }} onClick={handleOpen}>
                    <ControlPointIcon className={classes.extendedIcon} />
                        Order Now
                </Fab>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Please enter the order in PML format below.</h2>
                            <p id="transition-modal-description">You can also upload it using the upload button.</p>
                            
                            <TextField
                                variant="outlined"
                                className={classes.textarea}
                                multiline
                                rows={10}
                                maxRows={20}
                                style={{  display: 'inline-block', }}
                            />
                            <div className="modalButtons">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    endIcon={<Icon>delete</Icon>}
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </Grid>
        </Grid>
    </div>
    );
}