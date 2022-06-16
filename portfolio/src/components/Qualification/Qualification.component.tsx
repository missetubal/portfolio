import React from 'react';
import { Subtitle, Title } from '../../styles/general.styles';
import { Container } from './Qualification.style';

// import { Container } from './styles';

const Qualification: React.FC = () => {
  return (
    <Container id='qualifications'>
        <Title fontSize={10}>Qualificações</Title>
        <Subtitle>Experiência Profissional</Subtitle>
    </Container>
  );
}

export default Qualification;