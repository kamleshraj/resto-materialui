import { Box, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { restoInfo,footerGetTouch } from '../data/RestoData';

import Logo from './Logo';

//images for footer
import img1 from '../assets/images/footer/img1.jpg'
import img2 from '../assets/images/footer/img2.jpg'
import img3 from '../assets/images/footer/img3.jpg'
import img4 from '../assets/images/footer/img4.jpg'
import img5 from '../assets/images/footer/img5.jpg'
import img6 from '../assets/images/footer/img6.jpg'

const Footer = () => {
  return (
  <>
    <Box sx={{bgcolor:'primary.dark', p:{xs:'1.5rem',lg:'5rem 2rem'}}}>
        {/* <Box sx={{my:3,"& svg":{fontSize:'2rem',cursor:'pointer',padding:'0 7px',"& :hover":{color:'goldenrod',transform:'translateX(5px)',transition:'all 400ms'}}}}>
            
        </Box> */}
        <Grid container>
          <Grid item xs={12} sm={6} lg={4}>
            <Logo/>
            <Typography variant='body1' color={'text.main'} sx={{paddingRight:{xs:'0',lg:'11rem'},marginTop:4,marginBottom:4}}>
              Be the first to know about new collections, special events, and whats going on at Our Place. We are creative
            </Typography>
            <Typography variant='body1' sx={{color:'secondary.main','& a':{display:'block',color:'text.white',fontSize:'1.5rem',fontWeight:'bold'}}}>
              BOOK A TABLE
              <Link href="tel:88899900011" underline='none'>888 999 000 11</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant='h5' component={'h6'} color={'text.white'}>
              Get In Tuch
            </Typography>
            <List>
              {footerGetTouch.map((item,index)=>{
                return(
                  <ListItem key={index}>
                  <ListItemIcon sx={{color:'text.main'}}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{color:'text.main'}}>{item.title}</ListItemText>
                </ListItem>
                )
              })}
              <ListItem sx={{borderTop:1}}>
                <Stack direction="row" spacing={1} sx={{color:'text.main'}}>
                  {Object.keys(restoInfo.socials).map((key,index)=>{
                    return(
                      <Box key={index}>
                      {restoInfo.socials[key].icon}
                      </Box>
                    )
                  })}
                </Stack>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} lg={2} sx={{paddingLeft:{xs:0,lg:3}}}>
            <Typography variant='h5' component={'h6'} color={'text.white'}>
              Pages
            </Typography>
            <List className='footer-pagelink'>
              <ListItem>
                <Link href='#' underline='none' >About Us</Link>
              </ListItem>
              <ListItem>
                <Link href='#' underline='none'>Our Menu</Link>
              </ListItem>
              <ListItem>
                <Link href='#' underline='none'>Pricing Plan</Link>
              </ListItem>
              <ListItem>
                <Link href='#' underline='none'>How It Works</Link>
              </ListItem>
              <ListItem>
                <Link href='#' underline='none'>Contact Us</Link>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Stack flexDirection={'row'} flexWrap="wrap" sx={{'& img':{maxWidth:'90px'}}} 
            spacing={{ xs: 1, sm: 2 }}
            useFlexGap
            >
              <Box component={'img'} src={img1} alt='footer picture' />
              <Box component={'img'} src={img2} alt='footer picture'/>
              <Box component={'img'} src={img3} alt='footer picture'/>
              <Box component={'img'} src={img4} alt='footer picture'/>
              <Box component={'img'} src={img5} alt='footer picture'/>
              <Box component={'img'} src={img6} alt='footer picture'/>
            </Stack>
          </Grid>
        </Grid>
    </Box>
    <Box sx={{bgcolor:'primary.dark',textAlign:'center',color:'text.main', padding:'1.5rem',borderTop:'1px solid #e9e9e929'}}>
      <Typography variant='body1'>
      Copyright @2023 Dinenos by ReacThemes
      </Typography>
    </Box>
    </>
  )
}

export default Footer