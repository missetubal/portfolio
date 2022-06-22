import React from 'react';
import HiMemoji from '../../assets/Memoji/HiMemoji.png'
import { ButtonContainer, Container, CVButton, GetInTouchButton, HelloContainer, Left, Memoji, MemojiImage, NameContainer, NameText, Right, TextHello } from './Home.styles';
import { MemojiBackground } from '../../assets/Memoji Background';
import SocialMedia from '../../components/SocialMedia/SocialMedia.component';


const Home: React.FC = () => {
  return (
    <Container>
        <SocialMedia/>
        <Left>
            <HelloContainer>
                <TextHello>Olá!</TextHello>
            </HelloContainer>
            <NameContainer>
                <NameText>Eu sou a</NameText>
                <NameText textDecoration='underline' color='#737373' fontWeight={700}> Michelle</NameText>
            </NameContainer>
            <NameText fontWeight={300} fontSize={25}> Front-End Developer & QATester</NameText>
            <ButtonContainer>
                <CVButton href='#' target='=_blank'>Download CV</CVButton>
                <GetInTouchButton href='#' target='=_blank'>Entre em Contato</GetInTouchButton>
            </ButtonContainer>
        </Left>
        <Right>
           <MemojiImage >
                <MemojiBackground/>
                <Memoji src={HiMemoji}/>
           </MemojiImage>
        </Right>
    </Container>
  );
}

export default Home;