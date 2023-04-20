import React,{useState} from 'react'
import { Box, Tabs,Tab} from '@mui/material'
import { MenuData } from '../../data/mData';
import MenuItems from './MenuItems';

export const FilterGallery = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [items, setItems] = useState(MenuData);
  
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
        textColor="secondary">
          <Tab label="All" onClick={() => setItems(MenuData)} sx={{bgcolor:'#fff'}}/>
          <Tab label="Breakfast" onClick={() => filterItem("breakfast")} sx={{bgcolor:'#fff'}}/>
          <Tab label="Lunch" onClick={() => filterItem("lunch")} sx={{bgcolor:'#fff'}}/>
          <Tab label="Dinner" onClick={() => filterItem("dinner")} sx={{bgcolor:'#fff'}}/>
        </Tabs>
    </Box>
    <MenuItems menuData={items}/>
    </>
  )
}
