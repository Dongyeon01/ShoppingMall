import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Product(props) {
    return(
        <TableRow>
            <TableCell>{props.id}</TableCell>
           <TableCell><img src={props.img} alt="이미지"></img></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.amount}</TableCell>
            <TableCell>{props.number}</TableCell>
        </TableRow>        
    );
}

export default Product;