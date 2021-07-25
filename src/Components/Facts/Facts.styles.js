import styled from "styled-components";
import theme from "./../../theme"

export const MenuDiv = styled.div`
    display: flex;
    border: 1px solid ${theme.colors.darkGray};;
    height: 3rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    max-width: 600px;
    margin: 0 auto;

    
    

    h3{
        font-size: 8px;
        color: ${theme.colors.lightGray};
        letter-spacing: 0.046rem;
        font-weight: 700;
    }

    h4{
        font-family: ${theme.fonts.secondary};
        font-size: 20px;
    }

`