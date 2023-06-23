import { Box, Container, styled, Paper } from '@mui/material'
import React,{useState,useEffect} from 'react'
import '../Styles/partner.css'
import Grid from '@mui/material/Unstable_Grid2';
import Technology from './Technology';


const Partnership = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // Rest of your component code
   

    return (
        <>
         {isMobile ? (
            <Container maxWidth="md" sx={{ height: 'auto', marginTop: "1%"}}>


            <section class="partnership-block ai-section section--indents-large">
    <div class="ai-section__container ai-section__inner ai-section__partnership-block">
    <div class="partnership-block__item partnership-block__item--title">
            <h2 class="hfs1 partnership-block__title">
              Our Partnerships            </h2>
          </div>
      <div class="partnership-block__wrapper">
      <div class="partnership-block__item logos-grid__slide logos-grid__slidee" >
              <img width="154" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Salesforce-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Salesforce-Partner-Color" decoding="async" loading="lazy"/>    
                    
              <img width="125" height="81" src="https://www.avenga.com/wp-content/uploads/2022/12/Microsoft-partner-color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Microsoft-partner-color" decoding="async" loading="lazy"/>      
                    
              <img width="154" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/AWS-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="AWS-Partner-Color" decoding="async" loading="lazy"/>      
                  
              <img width="154" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Google-Cloud-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Google-Cloud-Partner-Color" decoding="async" loading="lazy"/>           
             
               
              <img width="154" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Mulesoft-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Mulesoft-Partner-Color" decoding="async" loading="lazy"/>            
              </div>
              </div>

    </div>
  
  </section>
 
        </Container >):(

<Container maxWidth="lg" sx={{ height: 'auto', marginTop: "1%"  }}>


<section class="partnership-block ai-section section--indents-large">
<div class="ai-section__container ai-section__inner ai-section__partnership-block">

<div class="partnership-block__wrapper js-partnership-block-slider js-logos-slider-mobile">

      <div class="partnership-block__item partnership-block__item--title">
<h2 class="hfs1 partnership-block__title">
  Our Partnerships            </h2>
</div>
<div class="partnership-block__item logos-grid__slide" tabindex="-1">
  <img width="254" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Salesforce-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Salesforce-Partner-Color" decoding="async" loading="lazy"/>    
          </div><div class="partnership-block__item logos-grid__slide" tabindex="-1">
  <img width="225" height="81" src="https://www.avenga.com/wp-content/uploads/2022/12/Microsoft-partner-color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Microsoft-partner-color" decoding="async" loading="lazy"/>      
        </div><div class="partnership-block__item logos-grid__slide">
  <img width="254" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/AWS-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="AWS-Partner-Color" decoding="async" loading="lazy"/>      
        </div>
        <div class="partnership-block__item logos-grid__slide">
  <img width="254" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Google-Cloud-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Google-Cloud-Partner-Color" decoding="async" loading="lazy"/>           
   </div><div class="partnership-block__item logos-grid__slide" tabindex="-1">
  <img width="254" height="120" src="https://www.avenga.com/wp-content/uploads/2022/12/Mulesoft-Partner-Color.png" class="partnership-block__img colored-highlight object-fit-contain" alt="Mulesoft-Partner-Color" decoding="async" loading="lazy"/>            
  </div></div>

</div>

</section>

</Container >
        )}
              
        </>
    )
}

export default Partnership