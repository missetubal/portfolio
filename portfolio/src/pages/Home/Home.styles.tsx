import styled from "styled-components";
import { GeneralStyleProps } from "../../types/general.types";

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Left = styled.div`
 @media (max-width: 950px) {
        margin-left: 90px;
    }
`


export const HelloContainer = styled.div`
    background: linear-gradient(90deg, #32F6F6 0%, #A6A79F 100%);
    border-radius: 50px 50px 50px 0px;
    width: 197px;
    height: 72px;
   
`
export const TextHello = styled.p`
    color: #FFFFFF;
    font-size: 36px;
    text-align: center;
    align-items: center;
    padding: 14px 0px;
    font-weight: 700;
`
export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 0;
    @media (max-width: 950px) {flex-direction: column;}
`
export const NameText = styled.p<GeneralStyleProps>`
    font-size: ${props => props.fontSize || 50}px;
    text-decoration: ${props => props.textDecoration || 'none'};
    color: ${props => props.color || '#000000'};
    font-weight: ${props => props.fontWeight || 400};
    line-height: 0;
    @media (max-width: 950px) {
        width: 100%;
    }
`
export const Text = styled

export const Right = styled.div`
    margin-right: 100px;
    @media (max-width: 950px) {
        margin-left: 100px;
    }
   
`
export const Memoji = styled.img`
    width: 450px;
    height: 450px;
    position: absolute;
    left: 65%;
    top: 13%;
    @media (max-width: 950px) {
        top: 15%;
        left: 55%;
    }
   
`

export const MemojiImage = styled.div``
export const ButtonContainer = styled.div`
    margin-top: 90px;
    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
    }
`

export const CVButton = styled.a`
    background: linear-gradient(90deg, #DF580C 0%, #FD993D 100%);
    border: 3px solid #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 14px;
    font-weight: 900;
    color: #FEFEFE;
    text-decoration: none;
    margin-right: 20px;
    max-width: 170px;
    text-align: center;

    @media (max-width: 950px) {
        margin-bottom: 20px;
    }
`
export const GetInTouchButton = styled.a`
    background: linear-gradient(90deg, #434343 0%, #000000 100%);
    border: 3px solid #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 14px 10px;
    font-weight: 900;
    color: #FEFEFE;
    text-decoration: none;
    max-width: 170px;
    text-align: center;
`