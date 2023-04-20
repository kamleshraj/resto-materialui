
import CustomNavbar from './components/CustomNavbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import MenuDetails from './pages/MenuDetails';
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
