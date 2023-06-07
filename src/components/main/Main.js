import React,{useState} from 'react'
import { Container, Box } from '@mui/material'
import Header from '../home/Header'
import '../Styles/main.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SwipeableTextMobileStepper from '../home/menu'
import Service from './Service'
import Typical from 'react-typical'
import Partnership from './Partnership';
import Technology from './Technology';
import Success from './Success';
import Industries from './Industries';
import Values from './Values';
import Carrer from '../home/Carrer';
import Footer from '../home/Footer';
import Layout from '../home/Layout';
import BPartner from './B-partner';

const Main = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  
  const mobile=()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={mobile} sx={{textAlign:'center'}}>
    <SwipeableTextMobileStepper/>
    </Box>
  )
  return (
    <>
      <Container maxWidth="lg" sx={{ height: 'auto', marginTop: "4%" }}>
       {/* <Header/> */}
        <Container sx={{}}>

          <div class="main-page" >
            <div className='m-heading'>
              <h1> Your competitive
                advantage</h1>
              <div className='wrapper'>
                <div className="static-txt">
                  <h1>
                  <span>In{''}</span>

                  <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Engineering',1000,
                    'software',1000,
                    'tecnology',1000,
                    'business',1000,
                    'Career',1000
                  ]}
                  /></h1>
                  </div>
                
              </div>
            </div>
            <div className='m-img'>
              <img src='https://www.avenga.com/wp-content/uploads/2022/12/Avenga-Hiro-14.png' />
            </div>
           
          </div>
          <div className='main-arrow'>
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
              <div className='icon-p'>
              <div className='arrow'>
                <ArrowCircleRightIcon/>
                <div className='p'>get in touch</div>
              </div>
              
          </div>
            </Box>
          </span>
        
        </div>
            
         
          <div className='icons'>
          
            <Box 
              sx={{display:{xs:'none',sm:'block'},
              my: 2, "& img": {
                fontSize: "20px",
                cursur: 'pointer',
                marginLeft: 10,
              },
              "& img:hover": {
                color: 'red',
                transform: 'translatex(5px)',
                transition: 'all 400ms',
              }
            }}>
              
             
                 <div className='items-icon'>
             <img src='	https://www.avenga.com/wp-content/uploads/2023/01/GSK.png'/>
            <img src="https://www.avenga.com/wp-content/uploads/2023/01/Trov.png"/>
            <img src='https://www.avenga.com/wp-content/uploads/2023/03/MAZDA.svg'/>
            <img src='https://www.avenga.com/wp-content/uploads/2023/01/OLO.png'/>
            <img src='https://www.avenga.com/wp-content/uploads/2023/03/iqvia.svg'/>
            </div>
              {/* <LinkedInIcon /><TwitterIcon /><FacebookIcon /><InstagramIcon /> */}
             
            </Box>
           
         
        </div> 
        {/* */}
        </Container>
        
      
        
      </Container>

      <Service/>
      <Partnership/>
      <Technology/>
      <Success/>
      <Industries/>
       <BPartner/>  
      <Values/>
      <Carrer/>
   
    </>
  )
}

export default Main