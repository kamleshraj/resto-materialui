import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import  MenuItems  from '../../components/MenuCards'
import { Box, Container } from '@mui/material'
import { MenuData } from '../../data/mData'

const Menu = () => {
  return (
    <Box className='menu-list-main' sx={{marginBottom:{sm:'30px',md:'60px'}}}>
      <Container>
      <SectionTitle titleHeader={'Menu List'}/>
      <MenuItems menuData={MenuData}/>
      </Container>
    </Box>
  )
}

export default Menu