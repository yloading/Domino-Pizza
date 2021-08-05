import { makeStyles, Table, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: '#db9e1c',
            backgroundColor: '#ffd06d',
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer'
        },
    }
}))

export default function useTable(orders, headCells){

    const classes = useStyles();

    const TableContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {
        return(
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => 
                            (
                                <TableCell key={headCell.id}>
                                    {headCell.label}
                                </TableCell>

                            ))
                    }
                </TableRow>
            </TableHead>
            )
    }

    return {
        TableContainer,
        TblHead
    }
}