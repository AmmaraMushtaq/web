import React from 'react'
import { Chip, Container, Stack, Box } from '@mui/material'
import '../Styles/services.css'

import WestIcon from '@mui/icons-material/West';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const StrategySer = () => {
  return (
    <>
     

        <div className='services-img'>
        <Container sx={{width:'100vw ', padding: "3%",backgroundColor:'#00c2ff' }}>

          <h1> Our Services</h1>
          <div className='chip-label'>
            <Stack direction="row" >
              <div className='chip'>
                <Chip sx={{ cursor: 'pointer', backgroundColor: "#8ed8ef" }} label="Dedicated team" />
                <Chip sx={{ cursor: 'pointer', backgroundColor: "#8ed8ef" }} label="Staff augmentation" />
                <Chip sx={{ cursor: 'pointer', backgroundColor: "#8ed8ef" }} label="Permanent recruitment" />
              </div></Stack>
          </div>

          <div className='ser-p'>
            <div className=' service-arrow'>
              <p >
                Fast and reliable staffing services delivered on your terms. Avenga transforms, complements or creates in-house teams from scratch. Get the expertise and experience needed on short notice, as we are ready to cover a recruitment project of any size.
              </p>
              <span>
                <Box sx={{
                  my: 1, "& svg": {
                    fontSize: "40px",
                    cursur: 'pointer',
                    mr: 2,
                  },
                  "& svg:hover": {
                    color: 'blue',
                    transform: 'translatex(5px)',
                    transition: 'all 400ms'

                  }
                }}>
                  {/* icons */}

                  <ArrowCircleRightIcon />Explore staffing services

                </Box>
              </span>

            </div>
            <div className='service-img'>
              <img src='https://www.avenga.com/wp-content/uploads/2022/12/Paulina-Stochel.png'
              />
            </div>
            <div className='services-link'>

              <ul>
                <li><WestIcon/> <a href=''>Strategy</a></li>
                <li><WestIcon/><a href=''>Solution engineering</a></li>
                <li><WestIcon/><a href=''>Maintenance and support</a></li>
                <li><WestIcon/><a href=''>Staffing services</a></li>


              </ul>
            </div>

          </div>

</Container>
        </div>
        

      </>
      )
}

      export default StrategySer