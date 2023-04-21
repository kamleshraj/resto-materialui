import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light:'#292929',
            main:'#1F1F1F',
            dark: '#000'
        },
        secondary: {
            main: '#fac642',
            dark:'#ffac29',
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
            lineHeight:1
        },
        h2:{
            fontFamily: 'Arapey, serif',
            fontSize:'3rem',
            fontWeight:400,
            lineHeight:1,
            margin:'30px 0'
        },
        h3:{
            fontFamily: 'Roboto, sans-serif',
            fontSize:'2.5rem'
        },
        h4:{
            fontFamily: 'Roboto, sans-serif',
            fontSize:'2rem'
        },
        h5:{
            fontFamily: 'Roboto, sans-serif',
            fontSize:'1.5'
        },
        h6:{
            fontFamily: 'Roboto, sans-serif',
            fontSize:'1.1rem'
        },
        body1:{
            fontSize:'1.1rem'
        },
        body:{fontSize:'0.9rem'}
    }
})

export default theme