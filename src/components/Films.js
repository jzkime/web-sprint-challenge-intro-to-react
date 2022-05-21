import React from 'react'
import styled from 'styled-components'

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