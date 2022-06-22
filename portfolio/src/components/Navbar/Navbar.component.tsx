import React, { useState } from 'react';
import Moon from '../../assets/MoonBlack';
import Face from '../../assets/Memoji/Face.png'
import { Image, NavContainer, NavLeft, NavOptions, NavRight, Pages, SwitchColor, TextLeft } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <NavContainer>
      <NavLeft>
        {/* <Image src={Face}/> */}
        <TextLeft>Michelle Setúbal</TextLeft>
      </NavLeft>
      <NavRight>
        <NavOptions>
          <Pages href='/'>Inicio</Pages>
          <Pages href='/about'>Sobre</Pages>
          <Pages href=''>Experiências</Pages>
          <Pages href='/projects'>Projetos</Pages>
          <Pages href='/contact'>Serviços</Pages>
        </NavOptions>
        <SwitchColor onClick={()=>setIsDark(!isDark)}>
          <Moon />
        </SwitchColor>
      </NavRight>
    </NavContainer>
  );
}

export default Navbar;