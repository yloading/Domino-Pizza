import { Card, CardContent, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTable from './useTable';
import Controls from './Controls';

import useStyles from '../styles';

export default function Orders() {

    const classes = useStyles();
    const headCells = [
        {id: 'id', label: 'Order #'},
        {id: 'id2', label: 'Pizza #'},
        {id: 'id3', label: 'Size'},
        {id: 'id4', label: 'Crust'},
        {id: 'id5', label: 'Type'}
    ];

    const [orders, setOrders] = useState([])

    const [searchTerm, setSearchTerm] = useState('')

    const {
        TableContainer,
        TblHead
    } = useTable(orders, headCells);


    useEffect(() => {
        axios.get('http://localhost:5000/api/orders')
            .then(response => setOrders(response.data));
    }, []);

    return (
        <Container>
            <h1 className="orderHeader" id="order">Orders</h1>
            <Toolbar>
                <Controls.Input
                    label="Search Order"
                    style={{ width: '100%' }}
                    onChange={event => {setSearchTerm(event.target.value)}}
                />    
            </Toolbar>
            <div className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {
                        orders.filter((val) => {
                            if (searchTerm === "") {
                                return val
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map(order => 
                            (<Grid item key={order.order_number} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Order Number: {order.order_number}
                                        </Typography>
                                        {
                                            order.Pizzas.map(pizza => 
                                                (<div key={pizza.pizza_id}>
                                                    <Typography gutterBottom>
                                                        Pizza {pizza.pizza_number} - {pizza.size}, {pizza.crust}, {pizza.type}
                                                    </Typography>
                                                    {
                                                        pizza.type === 'custom' &&
                                                        pizza.Pizza_Addons.reverse().map(addons => (
                                                            <div key={addons.id}>
                                                            <Typography>
                                                                Toppings {addons.toppings_area} - {addons.toppings_item}
                                                            </Typography>
                                                            </div>
                                                        ))
                                                    }
                                                </div>))     
                                        }
                                    </CardContent>
                                </Card>
                            </Grid>))
                    }   
                </Grid>
            </div>
        </Container>
    );
}