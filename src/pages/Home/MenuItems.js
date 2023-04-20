import {Card, CardContent, CardMedia,Typography, Grid,Rating} from '@mui/material'
import {Link} from 'react-router-dom'
const MenuItems = ({menuData}) => {

  return (
    <>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {menuData.map((menu)=>{
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
               <Link to={`/menu-details/${menu.id}`} underline='none' color='inherit'> {menu.name}</Link>
              </Typography>
              <Rating name="read-only" value={menu.rating} readOnly sx={{fontSize:'1.1rem'}} />
              <Typography variant="body2" color="text.secondary">
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default MenuItems