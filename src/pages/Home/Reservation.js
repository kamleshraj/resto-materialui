import React,{useState} from 'react'
import { Grid, TextField,Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import CustomButton from '../../components/CustomButton';

// const datePickerStyle={
//   fontSize:'1.5rem',
//   color:'red'
// }

const Reservation = () => {
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);
  return (
    <>
    <Box component="form" className='reservation-form'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField id="outlined-basic" label="Person*" variant="outlined" fullWidth 
          sx={{
            'input':{color:'#fff'},
            "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: "#ffffff2e",color:'#fff'},"& .MuiInputLabel-root": {color: 'white'}},
            "& .MuiInputLabel-root": {color: 'white'},
            "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid #ffffff2e'}}
            }}/>
        </Grid>
      <Grid item xs={12} sm={6} lg={3}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label='Select Date' 
        value={value} onChange={(newValue) => setValue(newValue)}
        sx={{width:'100%',
          'input':{color:'#fff'},
          "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: "#ffffff2e",color:'#fff'},"& .MuiInputLabel-root": {color: 'white'}},
          "& .MuiInputLabel-root": {color: 'white'},
          "& .MuiOutlinedInput-root":{"& > fieldset": {border: '1px solid #ffffff2e'}}
          }}
        />
      </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Time"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(params) => <TextField {...params}/>}
            sx={{width:'100%',
              'input':{color:'#fff'},
              "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: "#ffffff2e",color:'#fff'},"& .MuiInputLabel-root": {color: 'white'}},
              "& .MuiInputLabel-root": {color: 'white'},
              '& .MuiTextField-root':{width:'100%'},
              "& .MuiOutlinedInput-root": {"& > fieldset": {border: '1px solid #ffffff2e'}}
              }}
         />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6} lg={3} sx={{'& button':{width:'100%',padding:'13px'}}}>
        <CustomButton btnname={'Book Reservation'} btncolor='secondary' btnvarient='contained'/>
      </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Reservation