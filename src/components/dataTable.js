import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { BiSearchAlt2 } from 'react-icons/bi';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'


function createData(img, name, sub, stock, price, total) {
    return { img, name, sub, stock, price, total };
}

const rows = [
    createData(img1, 'Frozen yoghurt', 'Lorem ipsum dolor sit amet.', 32, 45, 24),
    createData(img2, 'Ice cream sandwich', 'Lorem ipsum dolor sit amet.', 40, 45, 37),
    createData(img3, 'Eclair', 'Lorem ipsum dolor sit amet.', 23, 50, 24),
    createData(img4, 'Cupcake', 'Lorem ipsum dolor sit amet.', 12, 30, 67),
    createData(img5, 'Gingerbread', 'Lorem ipsum dolor sit amet.', 10, 50, 49),
];

export default function DataTable() {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: 5 }}>
            <div className='table-top'>
                <h1>Product Sell</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold', marginRight: 5 }}>
                        <Typography sx={{display:'flex',alignItems:'center', backgroundColor:'#FAFBFF', paddingLeft:2, borderRadius:10}}>
                            <BiSearchAlt2 size={15} /><input className='search1' placeholder='search'></input>

                        </Typography>
                    </Typography>

                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold', color: '#AFB0B3' }}>
                        <select className='combo-div' style={{ fontSize: 10 }}>
                            <option>Last 30 days</option>

                        </select>
                    </Typography>
                </div>
            </div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: '#E5E4E9', fontWeight: 'bold', fontSize: 17 }}>Product Name</TableCell>
                        <TableCell sx={{ color: '#E5E4E9', fontWeight: 'bold', fontSize: 17 }} align="right">Stock</TableCell>
                        <TableCell sx={{ color: '#E5E4E9', fontWeight: 'bold', fontSize: 17 }} align="right">Price</TableCell>
                        <TableCell sx={{ color: '#E5E4E9', fontWeight: 'bold', fontSize: 17 }} align="center">Total Sales</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <div className='table-style'>
                                    <img src={row.img} alt='img' style={{ width: 100, borderRadius: 10, marginRight: 10 }}></img>
                                    <div>
                                        <Typography variant="h6" color='black' sx={{ fontWeight: 'bold' }}>
                                            {row.name}
                                        </Typography>
                                        <Typography variant="body1" color='black' sx={{ color: "#E5E4E9" }}>
                                            {row.sub}
                                        </Typography>

                                    </div>
                                </div>

                            </TableCell>
                            <TableCell align="right">{row.stock} in stock</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="right">$ {row.price}</TableCell>
                            <TableCell align="center">{row.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}