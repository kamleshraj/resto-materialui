import React,{useState,useEffect} from 'react'
import { Box, Card, CardContent, Container, Rating, Stack, Typography,Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { MenuData } from '../data/mData'
import { Link } from 'react-router-dom'
const MenuDetails = () => {
    const { id } = useParams()
    const[item,setItem]=useState('')

    useEffect(()=>{
        const singleItem = MenuData.find((item)=>item.id==id)
        setItem(singleItem)
    },[id])
  return (
    <Box sx={{margin:{sm:'30px',md:'60px'}}}>
    <Container>
        <Card sx={{ minWidth: 275 }}>
            <Stack flexDirection={'row'}>
                <Box component={'img'} alt={item.name} src={item.image} sx={{maxWidth:'50%'}}>
                </Box>
                <CardContent>
                    <Typography variant='h4' component={'h4'}>
                        {item.name}                    
                    </Typography>
                    <Typography variant='body1' component={'body1'}>
                        {item.description}                    
                    </Typography>
                    <Typography variant='h5' component={'h5'}>
                        ${item.price}                    
                    </Typography>
                    <Rating value={item.rating} sx={{fontSize:'1.2rem',marginTop:'1rem'}}/>
                    <Typography variant='h5' component={'h5'}>
                     {item.category}                    
                    </Typography>
                    <Button component={Link} to="/" variant="contained" color="secondary.main" sx={{marginTop:'30px'}}>
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