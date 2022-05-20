import React from 'react'
import styled from 'styled-components'

const StyledAppear = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;

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

export default function Appearance(props) {
    const { eye_color, hair_color, height, skin_color } = props.character

    return (
        <StyledAppear>
             <StyledTitle>Appearance:</StyledTitle>
                <StyledPara>Hair Color: {hair_color} </StyledPara>
                <StyledPara>Eye Color: {eye_color} </StyledPara>
                <StyledPara>Height: {height} </StyledPara>
                <StyledPara>Skin Color: {skin_color} </StyledPara>
        </StyledAppear>
    )
}