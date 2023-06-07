import React from 'react'
import { Chip, Container,Stack,Box} from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../Styles/Technology.css'
import WestIcon from '@mui/icons-material/West';

const Technology = () => {
  return (
    <>
       <div className='technologies'>
       
    

     <div className='technologys-img'>
     <Container sx={{width:'100vw ', padding: "3%",backgroundColor:'#fcb900'}}
       >
<h1> Technologies</h1>
<div className='technology-label'>
<Stack direction="row" spacing={1}>
  <div className='chip'>
      <Chip sx={{cursor:'pointer',backgroundColor:"#ebd087"}} label="Cloud migration" />
      <Chip sx={{cursor:'pointer',backgroundColor:"#ebd087"}} label="Cloud consulting" />
      <Chip sx={{cursor:'pointer',backgroundColor:"#ebd087"}} label="Cloud migration" />
      
      <Chip sx={{cursor:'pointer',backgroundColor:"#ebd087"}} label="Cloud consulting" />
      <Chip sx={{cursor:'pointer',backgroundColor:"#ebd087"}} label="Cloud solution engineering" />
      </div></Stack>
    </div>
  
        <div className='technology-p'>
          <div className=' technology-arrow'>
    <p >
    Certified AWS, Google, and Azure experts are ready to consult, migrate, and engineer. Avenga offers a wide scope of cloud-based services for those seeking velocity, stability, and security.
    </p>
    <span>
            <Box sx={{
              my: 1, "& svg": {
                fontSize: "40px",
                cursur: 'pointer',
                mr: 2,
              },
              "& svg:hover": {
                color: '#fcb900',
                transform: 'translatex(5px)',
                transition: 'all 400ms'

              }
            }}>
              {/* icons */}
             
                <ArrowCircleRightIcon/>Explore Cloud
             
            </Box>
          </span>
          
          </div>
          <div className='technology-img'>
        <img src='https://www.avenga.com/wp-content/uploads/2023/01/HomePage_Andrii-Stashko-Ziablietsov.png'
        />
        </div>
        <div className='technology-link'>
        
        <ul>
             <li> <WestIcon/><a href=''>Strategy</a></li>
             <li><WestIcon/><a href=''>Solution engineering</a></li>
             <li><WestIcon/><a href=''>Maintenance and support</a></li>
             <li><WestIcon/><a href=''>Staffing services</a></li>
            

             </ul> 
         </div>
        
          </div> 
          
          </Container>
          
          </div>
          </div>
    </>
  )
}

export default Technology
