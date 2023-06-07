import { Box, Container, styled, Paper } from '@mui/material'
import React from 'react'
import '../Styles/partner.css'
import Grid from '@mui/material/Unstable_Grid2';
import Technology from './Technology';


const Partnership = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ height: 'auto', marginTop: "4%" }}>



                <div className='partner-heading' >


                    <Box sx={{ flexGrow: 3 }}>



                        <h1>Our Partnerships</h1>


                        <Grid xs={8}>
                            <div className='logo'>
                                <img src='https://www.avenga.com/wp-content/uploads/2022/12/AWS-Partner-Color.png' />
                                <img src='https://www.avenga.com/wp-content/uploads/2022/12/Salesforce-Partner-Color.png' />
                                <img src='https://www.avenga.com/wp-content/uploads/2022/12/Google-Cloud-Partner-Color.png' />
                                <img src='https://www.avenga.com/wp-content/uploads/2022/12/Mulesoft-Partner-Color.png' />
                                <img src='https://www.avenga.com/wp-content/uploads/2022/12/Microsoft-partner-color.png' />
                            </div>
                        </Grid>
              
               </Box>
            </div>

        </Container >
              
        </>
    )
}

export default Partnership