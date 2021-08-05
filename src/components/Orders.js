import { Container, TableBody, TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyles from '../styles';
import useTable from './useTable';

export default function Orders() {
    const classes = useStyles();

    const headCells = [
        {id: 'id', label: 'User ID'},
        {id: 'id2', label: 'Order ID'},
        {id: 'descrp', label: 'Description'}
    ];

    const [orders, setOrders] = useState([])

    const {
        TableContainer,
        TblHead
    } = useTable(orders, headCells);


    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setOrders(response.data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <Container>
            <h1>Orders</h1>
            <TableContainer>
                <TblHead />
                <TableBody>
                    {
                        orders.map(order => 
                            (<TableRow key={order.id}>
                                <TableCell>{order.userId}</TableCell>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.title}</TableCell>
                                <TableCell>{order.completed}</TableCell>
                            </TableRow>))
                    }
                    <TableRow>
                        <TableCell>Hi</TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </Container>
    );
}