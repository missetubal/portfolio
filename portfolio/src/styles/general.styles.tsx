import styled from 'styled-components'
import { GeneralStyleProps } from '../types/general.types'

export const Title = styled.p<GeneralStyleProps>`
    color: #999999;
    font-size: ${props => props.fontSize || 80}px;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 0px;
`
export const Subtitle = styled.p<GeneralStyleProps>`
    text-align: center;
    color: #6D6D6D;
    font-size: ${props => props.fontSize || 18}px;
    margin-bottom: 60px;

`