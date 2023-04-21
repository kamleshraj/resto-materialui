import React,{useState,useEffect} from 'react'
import { Box, Card, CardContent, Container, Rating, Stack, Typography,Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { MenuData } from '../../data/mData'
import { Link } from 'react-router-dom'
const MenuDetails = () => {
    const { id } = useParams()
    const[item,setItem]=useState('')

    useEffect(()=>{
        const singleItem = MenuData.find((item)=>item.id==id)
        setItem(singleItem)
    },[id])
  return (
    <Box sx={{margin:{xs:'60px 15px',sm:'30px',md:'60px'}}}>
    <Container>
        <Card sx={{ minWidth:{xs:'auto',sm:'275'}, }}>
            <Stack sx={{flexDirection:{sm:'column',md:"row"}}}>
                <Box component={'img'} alt={item.name} src={item.image} sx={{maxWidth:{xs:'100%',md:'50%'}}}>
                </Box>
                <CardContent>
                    <Typography variant='h4' component={'h4'}>
                        {item.name}                    
                    </Typography>
                    <Typography variant='body1' component={'body'}>
                        {item.description}                    
                    </Typography>
                    <Typography variant='h5' component={'h5'}>
                        ${item.price}                    
                    </Typography>
                    <Rating value={item.rating} readOnly sx={{fontSize:'1.2rem',marginTop:'1rem'}}/>
                    <Typography variant='h5' component={'h5'}>
                     {item.category}                    
                    </Typography>
                    <Button component={Link} to="/" variant="contained" color="secondary" sx={{marginTop:'30px'}}>
                        Back To Home
                    </Button>
                </CardContent>
            </Stack>
        </Card>
    </Container>
    </Box>
)
}

export default MenuDetails