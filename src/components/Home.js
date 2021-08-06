import React, { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import useStyles from '../styles';

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [inputText, setInputText] = useState('');
    const [responseMsg, setResponseMsg] = useState('');

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onValueChange = (e) => {
        setInputText(e.target.value);
    }

    const onSubmit = () => {
        const inputRequest = {
            pml: inputText
        }
        
        axios.post('http://localhost:5000/api/orders', inputRequest)
        .then(response => console.log(response))
        .catch(error => {
            setResponseMsg('error');
            console.error('There was an error!', error);
        });
    }

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
                            <form>
                                <div className={classes.textarea}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        minRows={15}
                                        maxRows={20}
                                        onChange={(e) => onValueChange(e)}
                                    />
                                </div>
                                
                                <div className={classes.modalButtons}>
                                    <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
                                    <Button variant="contained" color="primary" onClick={() => onSubmit()}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </Fade>
                </Modal>
            </Grid>
        </Grid>
    </div>
    );
}