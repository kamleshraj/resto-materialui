import React, { useState } from 'react'
import {AppBar, Container, Toolbar, Box,IconButton, Button, Drawer, Link as LinkAnchor,Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const CustomNavbar = () => {
    const [mobileOpen,setMobileOpen]=useState(false)
    const navItems=['Home','Menu','About us','Contact us']
    
    //drawer menu
    const handleDrawerToggle=()=>{
        setMobileOpen(!mobileOpen)
    }
    const drawer=(
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
            {navItems.map((item) => (
            <Button key={item} sx={{ color: '#000',display:'flex',flexDirection:'column' }}>
                {item}
            </Button>
            ))}
        </Box>
    )
  return (
    <>
    <AppBar position="sticky" component={'nav'} sx={{bgcolor:'main',boxShadow:'none'}}>
        <Container maxWidth='xl'>
            <Toolbar disableGutters className='main-navbar'>
                <Box sx={{ flexGrow: 1, display: { md: 'flex' }, alignItems:'center'}}>
                <Logo/>
                    <Box sx={{display:{xs:'none',md:'block',marginLeft:'150px'}}}>
                        {navItems.map((item,index) => (
                            <Button key={item} component={Link} to={index===0 ?'/':`/${item.toLocaleLowerCase()}`} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Box>
             
                <Box sx={{display:{xs:'none',sm:'block',flexGrow:1,textAlign:'center'},'@media (min-width:991px)':{textAlign: 'right'}}}>
                    <Button type='button' variant='contained' sx={{bgcolor:'secondary'}}>
                    <Typography variant='body1' sx={{color:'secondary.main','& a':{display:'block',color:'text.white',fontSize:'1.5rem',fontWeight:'bold'}}}>
              BOOK A TABLE
              <LinkAnchor href="tel:88899900011" underline='none'>888 999 000 11</LinkAnchor>
            </Typography>
                    </Button>
                </Box>
                <IconButton
                 onClick={handleDrawerToggle}
                 edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
    <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} 
        sx={{display:{xs:'block',md:'none'},"& .MuiDrawer-paper":{
            boxSizing:'border-box',
            width:'240px'
        }}}>
            {drawer}
        </Drawer>
    </Box>
</>
)}

export default CustomNavbar