import React from 'react';
import { Rectangle, Root } from './App.style';
import Apresentation from './components/Apresentation/Apresentation.component';
import Navbar from './components/Navbar/Navbar.component';
import Qualification from './components/Qualification/Qualification.component';

function App() {
  return (
    <Root>
      <Navbar/>
      <Rectangle/>
      <Apresentation/>
      <Qualification/>
    </Root>
  );
}

export default App;
