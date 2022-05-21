import React from 'react'
import styled from 'styled-components'

const StyledAppear = styled.div`
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


export default function Appearance(props) {
    const { eye_color, hair_color, height, skin_color } = props.character

    return (
        <StyledAppear>
                <StyledButton onClick={props.close}>close</StyledButton>

                <StyledPara>Hair Color: {hair_color} </StyledPara>
                <StyledPara>Eye Color: {eye_color} </StyledPara>
                <StyledPara>Height: {height} </StyledPara>
                <StyledPara>Skin Color: {skin_color} </StyledPara>
        </StyledAppear>
    )
}