// Write your Character component here
import React, { useState } from 'react'
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

const StyledShowMore = styled.div`
    width: 40%;
` 

const StyledTitle = styled.h3`
    padding: 5%;
    border: 2px solid #2e557c;
    margin-bottom: 5%;
`

const StyledButton = styled.button`
    width: 60%;
    background-color: #7e7863;
`

export default function Character(props) {
    const { name, gender, films } = props.character
    const [ appear, setAppear ] = useState(false)
    const [ showFilms, setShowFilms ] = useState(false)

    const close = () => {
        setAppear(false);
        setShowFilms(false);
    }

    return (
        <StyledCreate>
            <StyledName>{name}</StyledName>
            <p>Gender: {gender}</p>
            <StyledAdditional>
                <StyledShowMore>
                    <StyledTitle>Films:</StyledTitle>
                    { !(showFilms) && <StyledButton onClick={() => setShowFilms(true)}>show films</StyledButton> }
                    {showFilms && <Films films={films} close={close} />}
                </StyledShowMore>
                
                <StyledShowMore>
                <StyledTitle>Appearance:</StyledTitle>
                { !(appear) && <StyledButton onClick={() => setAppear(true)}>Appearance</StyledButton> }
                { appear && <Appearance character={props.character} close={close} /> }
                </StyledShowMore>
            </StyledAdditional>
        </StyledCreate>
    );
}