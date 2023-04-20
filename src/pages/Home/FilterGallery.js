import React,{useState} from 'react'
import { Box, Tabs,Tab,Typography,Grid,Card,CardMedia,CardContent,Link  } from '@mui/material'
import { MenuData } from '../../data/mData';

export const FilterGallery = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [items, setItems] = useState(MenuData);
  //const [active, setActive] = useState(false);
  
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  
  const filterItem = (categItem) => {
    const updateItems = MenuData.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
 
  };
  
  return (
    <>
    <Box sx={{margin:'30px 0'}}>
        <Tabs value={tabIndex} onChange={handleChange} centered 
        indicatorColor="secondary"
        textColor="secondary"
        >
            <Tab label="All" onClick={() => setItems(MenuData)} sx={{bgcolor:'#fff'}}/>
            <Tab label="Breakfast" onClick={() => filterItem("breakfast")} sx={{bgcolor:'#fff'}}/>
            <Tab label="Lunch" onClick={() => filterItem("lunch")} sx={{bgcolor:'#fff'}}/>
            <Tab label="Dinner" onClick={() => filterItem("dinner")} sx={{bgcolor:'#fff'}}/>
        </Tabs>
    </Box>
    <Box sx={{ padding: 2 }}>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((menu)=>{
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
              <Typography variant="body2" color="text.secondary">
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          )
        })}
      </Grid>
      </Box>
    </>
  )
}
