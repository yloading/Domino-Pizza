import { Container, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useTable from './useTable';
import Controls from './Controls';

export default function Orders() {

    const headCells = [
        {id: 'id', label: 'User ID'},
        {id: 'id2', label: 'Order ID'},
        {id: 'descrp', label: 'Description'}
    ];

    const [orders, setOrders] = useState([])

    const [searchTerm, setSearchTerm] = useState('')

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
            <Toolbar>
                <Controls.Input
                    label="Search Order"
                    style={{ width: '100%' }}
                    onChange={event => {setSearchTerm(event.target.value)}}
                />    
            </Toolbar>
            <TableContainer>
                <TblHead />
                <TableBody>
                    {
                        orders.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map(order => 
                            (<TableRow key={order.id}>
                                <TableCell>{order.userId}</TableCell>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.title}</TableCell>
                            </TableRow>))
                    }
                </TableBody>
            </TableContainer>
        </Container>
    );
}