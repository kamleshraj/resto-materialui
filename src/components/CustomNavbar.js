import { AppBar, Box, Container, List, useTheme, useMediaQuery, ListItemButton, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import {NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

import DrawerComp from './DrawerComp';
const NavbarMenu = styled('nav')(({ theme }) => ({
    '& a':{
        color:'#fff',
        textDecoration:'none',
        paddingBottom:'5px'
        // [theme.breakpoints.down('sm')]:{
        //     color:'blue'
        // }
    },
    '& a:hover':{
        color:'#ffac29'
    },
    '& .active':{
        borderBottom: '1px solid #ffac29'
    }
}))
const CustomNavbar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" >
    <Container maxWidth="lg">
      <Toolbar sx={{justifyContent:'space-between'}}>
        
      {isMatch ? (
        <>
            <Logo/>
            <DrawerComp/>
        </>
      ):(
        <>
        <Logo/>
        <Box component={'nav'}>
            <NavbarMenu>
                <List sx={{display:'flex',flexDirection:'row'}}>
                    <ListItemButton>
                        <NavLink to='/'>Home</NavLink>
                    </ListItemButton>
                    <ListItemButton>
                        <NavLink to='/menu'>Menu</NavLink>
                    </ListItemButton>
                    <ListItemButton>
                        <NavLink to='/aboutus'>About US</NavLink>
                    </ListItemButton>
                    <ListItemButton>
                        <NavLink to='/contactus'>Contact US</NavLink>
                    </ListItemButton>
                </List>
                </NavbarMenu>
            </Box>
            <Box>
                Book A Table
            </Box>
            </>
      )}
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default CustomNavbar