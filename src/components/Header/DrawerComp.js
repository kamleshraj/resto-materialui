import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, List, ListItemButton,Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import styled from '@emotion/styled';

const StyledDrawer=styled(List)({
   'a':{ textDecoration:'none'}
})

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
        <StyledDrawer sx={{display:'flex',flexDirection:'column',minWidth:'250px'}}>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/' underline="none">Home</NavLink>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/menu' underline="none">Menu</NavLink>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/aboutus' underline="none">About Us</NavLink>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => setOpenDrawer(false)}>
                <NavLink to='/contactus' underline="none">Contact Us</NavLink>
            </ListItemButton>
        </StyledDrawer>
    </Drawer>
    <IconButton sx={{ color: "white", marginLeft: "auto" }} 
               onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComp