import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';    
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
'	https://www.avenga.com/wp-content/uploads/2023/01/GSK.png',
  },
  { 
    imgPath:
      'https://www.avenga.com/wp-content/uploads/2023/01/Trov.png',
  },
  {
    imgPath:
      'https://www.avenga.com/wp-content/uploads/2023/03/MAZDA.svg',
  },
  {
    imgPath:
      'https://www.avenga.com/wp-content/uploads/2023/03/iqvia.svg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ minWidth: 768, flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
         <img src={step.imgPath}/>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;