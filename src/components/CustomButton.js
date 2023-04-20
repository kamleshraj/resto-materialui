import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({btnname,btncolor,btnvarient}) => {
  return (
    <Button color={btncolor} variant={btnvarient} size="large">{btnname}</Button>
  )
}

export default CustomButton