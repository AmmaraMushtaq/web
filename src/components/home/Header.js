import React,{useState} from 'react'
import {AppBar, Toolbar, Typography,Tabs,Tab,useMediaQuery,useTheme } from "@mui/material"
import {Search,ArrowDropDown  } from '@mui/icons-material';
import DrawerComp from './Drawer'
const Header = () => {
  const [value,setValue]=useState()
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down("md"))
  const Pages=["industries","services","tecnologies","success","about","insights","career","contact"]
  return (
    <React.Fragment>
    <AppBar sx={{backgroundColor:"#063970",marginLeft:'auto'}}>
      <Toolbar sx={{width:'100%',justifyContent:'center',alignItems:'center'}}>
        {isMatch?(
          <> <Typography sx={{fontSize:'1.5rem',paddingLeft:'10%'}}>
            avenga
            </Typography>
     <DrawerComp/>
            </>
        ):( <>
        <Typography> avenga</Typography>
        <Tabs textColor='inherit' value={value}
        onChange={(e,value)=>{setValue(value)}}>
          {Pages.map((item,index)=>(
            <Tab key={index} label={item}/>
          ))}
         
        </Tabs>
        <Search/>
        <Tab label="Global" ></Tab>
      
        <Tab label="EN"/>
        </>)}
        

      </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default Header