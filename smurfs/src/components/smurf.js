import React from 'react';
import styled from 'styled-components'

const Pretty = styled.div`
border:solid grey 10px;
margin: 3rem,;
margin-left: 30rem;
margin-right: 30rem;
background-color: skyblue

`
const Head = styled.h3`
border:solid grey 1px;
margin: 1rem;
background-color: white;
`
const Mid = styled.p`
border:solid grey 1px;
margin: 1rem;
background-color: yellow;
`
const Foot = styled.p`
border:solid grey 1px;
margin: 1rem;
background-color: red;
`

const Smurf = (props) => {

    return(
        <Pretty>
            <Head>{props.smurf.name}</Head>
            <Mid>Age: {props.smurf.age}</Mid>
            <Foot>Height: {props.smurf.height}</Foot>
        </Pretty>
    )
}

export default Smurf 