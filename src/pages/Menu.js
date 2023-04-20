import { Box, Card, Container, CardContent, CardMedia,Typography, Grid, Link} from '@mui/material'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { MenuData } from '../data/mData'
const Menu = () => {
  return (
    <Box className='menu-list-main'>
      <Container>
        <SectionTitle titleHeader={'Menu List'}/>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MenuData.map((menu)=>{
          return(
            <Grid key={menu.id} item xs={12} sm={6} md={4} lg={3}>
            <Card elevation={10}>
            <CardMedia
              sx={{ height: 140 }}
              image={menu.image}
              title={menu.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               <Link href='/menu-detail' underline='none' color='inherit'> {menu.name}</Link>
              </Typography>
              <Typography variant="body2" color="text.main">
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          )
        })}
      </Grid>
      </Container>
    </Box>
  )
}

export default Menu