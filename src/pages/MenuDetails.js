import React,{useState,useEffect} from 'react'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { MenuData } from '../data/mData'
const MenuDetails = () => {
    const {id} = useParams()
    const[menuItem,setMenuItem]=useState(MenuData)

  return (
    <Container>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography>
                This is Menu Details page
                </Typography>
            </CardContent>
        </Card>
    </Container>
)
}

export default MenuDetails