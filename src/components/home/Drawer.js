import React,{useState} from 'react'
import { Drawer, IconButton, List, ListItemText} from '@mui/material'
import {Dehaze} from '@mui/icons-material';
const Pages=["industries","services","tecnologies","success","about","insights","career","contact"]

const DrawerComp = () => {
    const [openDrawer,setOpenDrawer]=useState(false)
  
   
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List>
            {Pages.map((item,index)=>(
            <ListItemText onClick={()=>setOpenDrawer(false)} key={index}>{item}</ListItemText>

            ))}
        </List>
    </Drawer>
    <IconButton  sx={{color:"white",marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
<Dehaze/>
    </IconButton>
    </>
  )
}

export default DrawerComp