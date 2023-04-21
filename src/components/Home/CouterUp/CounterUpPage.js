import {Typography } from '@mui/material'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const CounterUpPage = ({counterEnd,counterTitle,entityMark}) => {
const[counterOn,setCounterOn]=useState(false)

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>        
        <Typography variant='h2' component={'h1'} color={'text.white'} sx={{margin:'10px 0',fontSize:'5rem'}}>
            {counterOn && <CountUp start={0} end={counterEnd} duration={5} delay={0}/>}{entityMark}
        </Typography>
        <Typography variant='body1' color={'text.main'}>
            {counterTitle}
        </Typography>
    </ScrollTrigger>
  )
}

export default CounterUpPage