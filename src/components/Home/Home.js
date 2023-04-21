import React from 'react'
import {Box, Typography, Container, Stack, Grid} from '@mui/material';
import BannerImg from '../../assets/images/banner.jpeg';
import './home.css';
import SectionTitle from '../SectionTitle';
import CustomButton from '../CustomButton';
import titleImg from '../../assets/images/title-shape.png';
import Reservation from './Reservation';
import WelcomeResto from './WelcomeResto';
import { FilterGallery } from './FilterGallery';
import StarterandMenu from './StarterandMenu';
import styled from '@emotion/styled';
import CounterUpPage from './CouterUp/CounterUpPage';

const HeroBanner=styled(Box)({
    background:`url(${BannerImg})`,
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top'
})

const Home = () => {
    
  return (
    <>
        <HeroBanner>
            <Box className='hero-banner-info' sx={{p:3,maxWidth:'550px',textAlign:'center'}}>
                <Typography variant='body1' sx={{
                    fontSize: '.75rem',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: 0,
                    bgcolor:'theme.palette.primary.main'
                }}>
                    We Serve Food, Harmony, & Laughter Since 1998
                </Typography>
                <SectionTitle titleHeader={'Delicious Foods With Wonderful Eating'}/>
                <Stack direction={{ xs: 'column', sm: 'row'}} justifyContent={'center'} spacing={2}>
                   <CustomButton btnname={'View More'} btncolor='secondary' btnvarient='contained'/>
                   <CustomButton btnname={'Food Menu'} btncolor='primary' btnvarient='outlined'/>
                </Stack>
            </Box>
        </HeroBanner>
        <Box className="reservation-form" sx={{p:{sm:'2rem',md:'5rem'},bgcolor:'primary.main'}}>
            <Container>
                <Reservation/>
            </Container>
        </Box>
        <Box className='welcome-main' sx={{p:'7rem 2.5rem 12rem 2.5rem',bgcolor:'primary.light',"@media (max-width:600px)": {p:2}}}>
            <WelcomeResto/>
        </Box>
        <Box className='ourfood-menu' sx={{bgcolor:'primary.main',p:'7rem 2.5rem 7rem 2.5rem',"@media (max-width:600px)": {p:2}}}>
            <Box className='ourfood-menu-header' sx={{textAlign:'center'}}>
                <Box component={'img'} src={titleImg} alt='title image'/>
                <SectionTitle titleHeader={'Our Food Menu'} titleColor={'text.white'}/>
                <Typography variant='body1' color={'text.main'}>
                Its the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.
                </Typography>
            </Box>
            <FilterGallery/>
        </Box>
        <Box className='counter-main' sx={{bgcolor:'primary.light',p:'5rem 2.5rem 5rem 2.5rem',"@media (max-width:600px)": {p:2}}}>
           <Grid container>
                <Grid item sx={{minWidth:'250px',textAlign:'center'}}>
                    <CounterUpPage counterEnd={10} counterTitle={'Awards Won'}/>
                </Grid>
                <Grid item sx={{minWidth:'250px',textAlign:'center'}}>
                    <CounterUpPage counterEnd={5} counterTitle={'Daily Orders'} entityMark={'K'}/>
                </Grid>
                <Grid item sx={{minWidth:'250px',textAlign:'center'}}>
                    <CounterUpPage counterEnd={99} counterTitle={'Members'} />
                </Grid>
                <Grid item sx={{minWidth:'250px',textAlign:'center'}}>
                    <CounterUpPage counterEnd={100} counterTitle={'Menu & Dish'} entityMark={'+'}/>
                </Grid>
                <Grid item sx={{minWidth:'250px',textAlign:'center'}}>
                    <CounterUpPage counterEnd={25} counterTitle={'Specialities'}/>
                </Grid>
           </Grid>
        </Box>
        <Box className='starter-main-dish' sx={{bgcolor:'primary.main',p:'5rem 2.5rem 5rem 2.5rem',"@media (max-width:600px)": {p:2}}}>
            <Box className='ourfood-menu-header' sx={{textAlign:'center',marginBottom:{sm:'15px',lg:'60px'}}}>
                <Box component={'img'} src={titleImg} alt='title image'/>
                <SectionTitle titleHeader={'Starters & Main Dishes'} titleColor={'text.white'}/>
                <Typography variant='body1' color={'text.main'}>
                It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean in the big air.
                </Typography>
            </Box>
            <Box>
                <StarterandMenu/>
            </Box>
        </Box>
    </>
  )
}

export default Home