import React from 'react';
import Product from './components/Product';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const product = [
    {   
        'id' : 1,
        'img' : 'https://placeimg.com/64/64/any/1',
        'name' : '상품A',
        'amount' : '2개',
        'number' : 'AEJDA1212'
    },
    {
        'id' : 2,
        'img' : 'https://placeimg.com/64/64/any/2',
        'name' : '상품B',
        'amount' : '4개',
        'number' : 'AEJDA1313'
    },
    {
        'id' : 3,
        'img' : 'https://placeimg.com/64/64/any/3',
        'name' : '상품C',
        'amount' : '1개',
        'number' : 'AEJDA1414'
    },
]
    
function AddProduct() {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>상품번호</TableCell>
                        <TableCell>상품이미지</TableCell>
                        <TableCell>상품이름</TableCell>
                        <TableCell>상품수량</TableCell>
                        <TableCell>상품코드</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {
                product.map(k =>{
                    return (<Product
                        key={k.key}
                        id={k.id}
                        img={k.img}
                        name={k.name}
                        amount={k.amount}
                        number={k.number}
                    />)
                })
            }
            </TableBody>
            </Table>
        </div>
    );
}

export default AddProduct;

