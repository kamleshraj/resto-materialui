import React from 'react'
import {Box} from '@mui/material'
import restologo from '../assets/images/restologo.svg';
import {Link} from '@mui/material'
const Logo = () => {
  return (
    <Box sx={{width:'130px'}}>
      <Link href="/" color="inherit"><img src={restologo} alt='my resto logo' className='mylogo'/></Link>
    </Box>
  )
}

export default Logo