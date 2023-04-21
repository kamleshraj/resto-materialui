
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Aboutus from './components/About/Aboutus';
import Contactus from './components/Contact/Contactus';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import MenuDetails from './components/Menu/MenuDetails';
const App=()=>{
  return (
    <>
      <BrowserRouter>
      <CssBaseline/>
        <CustomNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/menu-details/:id' element={<MenuDetails/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
