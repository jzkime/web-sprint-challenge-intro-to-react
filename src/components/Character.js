// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Appearance from './Appearance'
import Films from './Films'

const StyledCreate = styled.div`
    width: 35%;
    margin: 1rem;
    border-radius: 10px;
    background-color: #ad7d37;
    padding: 1rem;

    p:first-of-type {
        padding: 2%;
    }
`

const StyledName = styled.h2`
    padding: 1rem;
    background-color: #7e7863;
    color: #381010;
`

const StyledAdditional = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export default function Character(props) {
    const { name, gender, films } = props.character

    return (
        <StyledCreate>
            <StyledName>{name}</StyledName>
            <p>Gender: {gender}</p>
            <StyledAdditional>
                <Films films={films} />
                <Appearance character={props.character} />
            </StyledAdditional>
        </StyledCreate>
    );
}