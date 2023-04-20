import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, List, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
     <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{bgcolor:'primary.main',p:3}}>
            <Logo/>
        </Box>
        <List sx={{display:'flex',flexDirection:'column',minWidth:'250px'}}>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/'>Home</NavLink>
            </ListItemButton>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/menu'>Menu</NavLink>
            </ListItemButton>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/aboutus'>About Us</NavLink>
            </ListItemButton>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/contactus'>Contact Us</NavLink>
            </ListItemButton>
        </List>
    </Drawer>
    <IconButton sx={{ color: "white", marginLeft: "auto" }} 
               onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComp