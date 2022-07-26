import React from 'react'
import { aboutUsInfo } from '../data'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 150px;
  
`
const InfoContainer = styled.div`
    padding: 25px;

`
const Title = styled.h1`
    font-size: 45px;
    font-weight:600;
    padding: 20px;
    ${mobile({fontSize: "18px"})} 
`
const Desc = styled.p`
    color: black;
    font-size: 25px;
    font-weight: 300;
    line-height: 22px;
    padding: 10px;
    letter-spacing: 2px;
    line-height: 40px;
    ${mobile({fontSize: "15px",lineHeight:"18px",padding: "2px"})} 
`

const AboutUs = () => {
  return (
    <div className='about' id='about'>
    <Container>
        {aboutUsInfo.map((item) => (
           <InfoContainer>
            <Title><strong>{item.title}</strong></Title>
            <Desc>{item.desc}</Desc>
            </InfoContainer>
        ))}
    </Container>
    </div>
  )
}

export default AboutUs;