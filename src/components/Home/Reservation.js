import React,{useState} from 'react'
import { Grid, TextField,Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import CustomButton from '../CustomButton';

import styled from '@emotion/styled';

const StyledInputFiled= styled(Box)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  "& .MuiInputLabel-root": {color: 'white',fontSize:'1rem'},
  '& .MuiOutlinedInput-root': {
    '& input':{color:'#fff',fontSize:'1rem'},
    '& fieldset': {
      borderColor: '#ffffff2e'
    },
    '&:hover fieldset': {
      borderColor: '#ffffff2e',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff2e',
    },
    '& .MuiIconButton-root':{
      color:'#fff'
    }
  },
})

const Reservation = () => {
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  return (
    <>
    <StyledInputFiled component="form" className='reservation-form'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField id="outlined-basic" label="Person*" variant="outlined" fullWidth />
        </Grid>
      <Grid item xs={12} sm={6} lg={3}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label='Select Date*' 
        value={value} onChange={(newValue) => setValue(newValue)}
        sx={{width:'100%'}}
        />
      </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Time*"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(params) => <TextField {...params}/>}
            sx={{width:'100%'}}
         />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} sx={{'& button':{width:'100%',padding:'13px'}}}>
        <CustomButton btnname={'Book Reservation'} btncolor='secondary' btnvarient='contained'/>
      </Grid>
      </Grid>
      </StyledInputFiled>
    </>
  )
}

export default Reservation