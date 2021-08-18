import styled from 'styled-components'
import theme from '../../theme'


export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 0 2em 2em 2em;
    top: 70px;
    background-color:#070722;

`

export const Btn = styled.div`
    display: flex;
    justify-content: space-between;
    height: 65px;
    cursor: pointer;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.darkGray};
`

export const Planet = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
`
export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({color})=> color};
`

export const PlanetName = styled.h2`
    text-transform: uppercase;
    font-family: ${theme.fonts.primary};
    font-size: 0.9375rem;
    font-weight: 600;
    letter-spacing: 1.36px;
    line-height: 25px;
    margin-left: 24px;
`