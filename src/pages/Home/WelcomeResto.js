import React from 'react'
import { Grid,Box, Typography } from '@mui/material';
import SectionTitle from '../../components/SectionTitle';
import about1 from '../../assets/images/home/about1.png';
import about2 from '../../assets/images/home/about2.jpg';
import lineshap from '../../assets/images/home/line-shape1-1.webp'
import round from '../../assets/images/home/round.png'
import titleImg from '../../assets/images/title-shape.png';
import CustomButton from '../../components/CustomButton';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const WelcomeImage = styled(Box)`
    display:flex;
    align-items:center;
    .lineshap{
       position:absolute;
       left:-5px;
       z-index:0;
    }
    .aboutus2-main{
        z-index:11;
        display: flex;
        align-items: flex-start;
        position:relative;
    }
    .about2-img{
        border: 10px solid #fff;
        margin-left: -100px;
        margin-bottom: -160px;
    }
    .round-img{
        position: absolute;
        right: -50px;
        top: -50px;
        animation:spin 15s linear infinite
    }
    @keyframes spin {
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
    @media (max-width: 600px){
        .lineshap{display:none}
        .aboutus2-main{display:none}
    }
    @media (min-width: 601px) and (max-width:901px){
        .about2-img{max-width:150%}
        .lineshap{max-width:80%}
        .welcome-main-content{padding-top:150px}
    }
    @media (min-width: 900px) and (max-width:1200px) {
        .lineshap{max-width:620px}
        .about2-img{
            max-width:350px;
            margin-left:-120px
        }
    }
`;

const WelcomeResto = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    console.log(matches)
  return (
    <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
            <WelcomeImage className='welcome-resto-main'>
                <Box component={'img'} src={about1} alt={'aboutus'} className='aboutus1'/>
                <Box component={'img'} src={lineshap} alt={'lineshap'} className='lineshap'/>
                <Box className='aboutus2-main'>
                    <Box component={'img'} src={about2} alt={'about2'} className='about2-img'/>
                    <Box component={'img'} src={round} alt={'round'} className='round-img'/>
                </Box>
            </WelcomeImage>
        </Grid>
        <Grid item sm={12} md={6}>
            <Box className="welcome-main-content" sx={{textAlign:'center',padding:{xs:'15px',sm:'140px 15px 0 15px', md:'60px 0 0 115px',lg:'60px'}}}>
                <Box component={'img'} src={titleImg} alt='title image'/>
                <SectionTitle titleHeader={'Welcome To Our Luxury Restaurant'} titleColor={'text.white'}/>
                <Typography variant='body1' color={'text.main'} sx={{paddingBottom:'50px'}}>
                It’s the story of an everlasting love affair, Dieter Delicioz and the Atlantic Ocean. Our proximity to the abundant riches of the sea and Portugal’s excellent produce.
                </Typography>
                <CustomButton btnname={'Get Free Tour'} btncolor='secondary' btnvarient='contained'/>
            </Box>
        </Grid>
    </Grid>
  )
}

export default WelcomeResto