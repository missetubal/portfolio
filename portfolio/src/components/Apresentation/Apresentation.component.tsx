import React from 'react';
import { Subtitle, Title } from '../../styles/general.styles';
import { Container, Left, Line, Right, Text, Button, SocialMediaContainer, MediaOptions} from './Apresentation.style';

const Apresentation: React.FC = () => {
    return (
        <Container id='apresentation'>
            <Left>
                <Title>Michelle Setúbal</Title>
                <Subtitle>Front-end Developer</Subtitle>
                <Button href='' >Download CV</Button>
            </Left>
            <Line />
            <Right>
                <Text>
                    Olá!
                    Meu nome é Michelle, eu tenho 24 anos e sou formada em Engenharia Elétrica.
                    Atualmente trabalho no time de front-end mobile em um cripto banco.
                    Desde muito nova sempre fui apaixonada pela área de programação, desde desafios simples
                    a problemas complexos de lógica.
                    Eu amo aprender e estou sempre disposta a dar o meu melhor em tudo que faço!
                    Caso queira saber mais sobre mim, acesse o meu curriculo. (:
                </Text>
                <SocialMediaContainer>
                        <MediaOptions href="https://www.linkedin.com/in/michelle-setubal/" target="_blank">IN.</MediaOptions>
                        <MediaOptions href="https://github.com/missetubal" target="_blank">GT.</MediaOptions>
                        <MediaOptions href="https://www.instagram.com/missetubal/" target="_blank">IG.</MediaOptions>
                </SocialMediaContainer>
            </Right>

        </Container>
    );
}

export default Apresentation;