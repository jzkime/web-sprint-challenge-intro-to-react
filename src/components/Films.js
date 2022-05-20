import React from 'react'
import styled from 'styled-components'

const StyledFilms = styled.div`
    width: 40%; 

    p:last-of-type {
        border: none;
    }
`

const StyledPara = styled.p`
    border-bottom: 2px solid #2e557c;
    padding: 5%;
`

const StyledTitle = styled.h3`
    padding: 5%;
    border: 2px solid #2e557c;
    margin-bottom: 5%;
`

export default function Films(props) {
    const { films } = props;

    return (
        <StyledFilms>
            <StyledTitle>Films:</StyledTitle>
            { films.map((film, index ) => <StyledPara key={index}>{film}</StyledPara>)}
        </StyledFilms>
    )
}