import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light:'#292929',
            main:'#1F1F1F',
            dark: '#000'
        },
        secondary: {
            main: '#DD5903',
            dark:'#DD5903',
            white:'#fff'
        },
        text:{
            main:'#666',//greytext,
            white: '#fff',
            black:'#000'
        }
    },
    typography:{
        fontFamily:'Roboto, sans-serif',
        htmlFontSize:16,
        fontSize:16,
        fontWeight:400,
        h1:{
            fontFamily: 'Arapey, serif',
            fontSize:'4rem',
            fontWeight:400,
            lineHeight:1,
            color:'#fff'
        },
        h2:{
            fontFamily: 'Arapey, serif',
            fontSize:'3rem',
            fontWeight:400,
            lineHeight:1,
            margin:'30px 0',
            color:'#fff'
        },
        h6:{
            fontFamily: 'Roboto, sans-serif',
            fontSize:'.9rem'
        },
        body1:{
            fontSize:'1.1rem'
        }
    },
    components:{
        MuiInputLabel: {

        }
    }
})

export default theme