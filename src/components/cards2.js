import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Cards2() {
  return (
    <Box sx={{ width: '100%',  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={8}>
          <Card sx={{ maxWidth: '100%', borderRadius: '10px' }}>
            <CardActionArea>
              <div className='graph-top' >
                <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                  Overview
                  <Typography variant="body2" color='rgba(141, 131, 131, 0.705)'>
                    Monthly Earning
                  </Typography>
                </Typography>
                <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                  <select className='combo-div'>
                    <option>Quarterly</option>

                  </select>
                </Typography>
              </div>
              <CardContent sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                  <div className='chart-1' style={{ height: '90px' }}></div>
                  <h3>Jan</h3>
                </div>
                <div><div className='chart-2' style={{ height: '70px' }}></div>
                  <h3>Feb</h3></div>
                <div><div className='chart-3' style={{ height: '145px' }}></div>
                  <h3>Mar</h3></div>
                <div><div className='chart-4' style={{ height: '100px' }}></div>
                  <h3>Apr</h3></div>
                <div><div className='chart-5' style={{ height: '120px' }}></div>
                  <h3>May</h3></div>
                <div><div className='chart-6' style={{ height: '50px' }}></div>
                  <h3>Jun</h3></div>
                <div><div className='chart-7' style={{ height: '130px' }}></div>
                  <h3>Jul</h3></div>
                <div><div className='chart-8' style={{ height: '150px', backgroundColor: 'rgb(20, 20, 141)' }}></div>
                  <h3>Aug</h3></div>
                <div><div className='chart-9' style={{ height: '140px' }}></div>
                  <h3>Sep</h3></div>
                <div><div className='chart-10' style={{ height: '110px' }}></div>
                  <h3>Oct</h3></div>
                <div><div className='chart-11' style={{ height: '100px' }}></div>
                  <h3>Nov</h3></div>
                <div><div className='chart-12' style={{ height: '115px' }}></div>
                  <h3>Dec</h3></div>

              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>



        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: '100%', borderRadius: '10px' }}>
            <CardActionArea>
              <CardContent >
                <div style={{ display: "grid", justifyContent: 'start', alignItems: 'center' }}>
                  <Typography variant="h5" color='black' sx={{ fontWeight: 'bold' }}>
                    Customers
                    <Typography variant="body2" color='rgba(141, 131, 131, 0.705)'>
                      Customers that buy product
                    </Typography>
                  </Typography>
                </div>

                <div className='customer-chart'>
                  <div style={{ width: 200, height: 200 }}>
                    <CircularProgressbar value={66} text={`65% `} />
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}