import { Container, TableBody, TableCell, TableRow } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTable from './useTable';

export default function Orders() {

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
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => setOrders(response.data));
    }, []);

    return (
        <Container>
            <h1 className="orderHeader" id="order">Orders</h1>
            <TableContainer>
                <TblHead />
                <TableBody>
                    {
                        orders.map(order => 
                            (<TableRow key={order.id}>
                                <TableCell>{order.userId}</TableCell>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.title}</TableCell>
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