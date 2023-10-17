import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDollarCircle } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';




export default function Cards() {
    return (
        <Box sx={{ width: '100%', }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                        <CardActionArea>
                            <CardContent sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='inner-card-content-4' style={{ backgroundColor: 'rgb(144, 235, 189)' }} >
                                    <AiOutlineDollarCircle color='green' size={40} />
                                </div>
                                <Typography variant="body2" color="rgba(194, 191, 191, 0.678)">
                                    Earning
                                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                                        $198K
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                        <sapn style={{ color: 'green' }}><AiOutlineArrowUp /> 37.8% </sapn>this month
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                        <CardActionArea>
                            <CardContent sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='inner-card-content-4' style={{ backgroundColor: 'rgba(178, 178, 184, 0.678)' }} >
                                    <CgNotes color='purple' size={40} />
                                </div>
                                <Typography variant="body2" color="rgba(194, 191, 191, 0.678)">
                                    Orders
                                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                                        $2.4K
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                        <sapn style={{ color: 'red' }}><AiOutlineArrowDown /> 2% </sapn>this month
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                        <CardActionArea>
                            <CardContent sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='inner-card-content-4' style={{ backgroundColor: 'rgba(138, 221, 200,0.808)' }}>
                                    <MdOutlineAccountBalanceWallet color='blue' size={40} />
                                </div>
                                <Typography variant="body2" color="rgba(194, 191, 191, 0.678)">
                                    Balance
                                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                                        $2.4K
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                        <sapn style={{ color: 'red' }}><AiOutlineArrowDown /> 2% </sapn>this month
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345, borderRadius: '10px' }}>
                        <CardActionArea>
                            <CardContent sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                                <div className='inner-card-content-4' style={{backgroundColor:"rgba(243, 142, 142, 0.877)"}} >
                                    <BiShoppingBag color='red' size={40} />
                                </div>
                                <Typography variant="body2" color="rgba(194, 191, 191, 0.678)">
                                    Total Sales
                                    <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                                        $89K
                                    </Typography>

                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                                        <sapn style={{ color: 'green' }}><AiOutlineArrowUp /> 11% </sapn>this week
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}