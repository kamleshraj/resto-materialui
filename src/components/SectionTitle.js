import { Box, Typography } from '@mui/material'
import React from 'react'

const SectionTitle = ({titleHeader,titleColor}) => {
  return (
    <Box sx={{padding:'40px 10px','& h2':{margin:0}}}>
        <Typography variant="h2" component="h2" color={titleColor}>
          {titleHeader}
        </Typography>
    </Box>
  )
}

export default SectionTitle