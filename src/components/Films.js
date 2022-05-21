import React from 'react'
import styled, {keyframes } from 'styled-components'

const kf = keyframes`
    50%{
        transform: scale(0.8);
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
`

const StyledFilms = styled.div`
    p:last-of-type {
        border: none;
    }
`

const StyledButton = styled.button`
    width: 60%;
    background-color: #7e7863;
    margin-bottom: 5%;
`

const StyledPara = styled.p`
    border-bottom: 2px solid #2e557c;
    padding: 5%;

    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`

export default function Films(props) {
    const { films } = props;

    return (
        <StyledFilms>
            <StyledButton onClick={props.close}>close</StyledButton>
            { films.map((film, index ) => <StyledPara key={index}>{film}</StyledPara>)}
        </StyledFilms>
    )
}