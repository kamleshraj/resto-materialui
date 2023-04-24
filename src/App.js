
import CustomNavbar from './components/Header/CustomNavbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Aboutus from './pages/About/Aboutus';
import Contactus from './pages/Contact/Contactus';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
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
