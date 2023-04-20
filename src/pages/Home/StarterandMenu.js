import React from 'react'
import { StarterAndMainDish } from '../../data/mData'
import { Grid,Box, Typography } from '@mui/material'

const StarterandMenu = () => {
  return (
    <>
    <Grid container>
        {StarterAndMainDish.map((item)=>{
           return(
            <Grid item xs={12} md={6} key={item.id}>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:{xs:'flex-start',sm:'space-around'},marginBottom:'30px'}}>
                  <Box component={'img'} src={item.image} alt='title image' sx={{borderRadius:'100px',width:{xs:'65px',lg:'90px'},height:{xs:'65px',lg:'90px'}, margin:{xs:'15px'}}}/>
                  <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{marginRight:'30px'}}>
                    <Typography variant='h2' component={'h6'} sx={{fontSize:'1.5rem',marginBottom:'.5rem',margin:'10px 0'}}>
                      {item.title}
                    </Typography>
                    <Typography variant='body1' color={'text.main'}>
                      {item.desc}
                    </Typography>
                    </Box>
                    <Box sx={{bgcolor:'#fff',padding:'7px 15px',borderRadius:'50px','&:hover':{bgcolor:'secondary.main'},'&:hover p':{color:'text.white'}}}>
                    <Typography variant='body1' color={'text.main'}>
                    {item.price}
                    </Typography>
                  </Box>
                  </Box>
                </Box>
            </Grid>
           )
        })}
    </Grid>
    </>
  )
}

export default StarterandMenu