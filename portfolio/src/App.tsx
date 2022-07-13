import React from 'react';
import MenuMobile from './components/MenuMobile/MenuMobile.component';
import Navbar from './components/Navbar/Navbar.component';
import AnimatedRoute from './routes/AnimatedRoutes';
import { GlobalStyle } from './styles/general.styles';

function App() {
  return (
    // <GlobalStyle>
    <>
      <Navbar/>
      <MenuMobile/>
      <AnimatedRoute/>
    </>
     
    // </GlobalStyle>

  );
}

export default App;
