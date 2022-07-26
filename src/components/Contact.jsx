import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
 
`

const Title = styled.h1`
    color: black;
    font-size:70px;
    margin-bottom:20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ textAlign: "center", fontSize:"45px"})}
    

`
const InputContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    padding: 4vw 6vw;
    width: 90%;
    max-width: 600px;
    border-radius: 10px;

`

const Input = styled.input`
    border:1px solid black;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: white;
    font-size: 16px;
    border-radius:10px;
    ${mobile({ margin: "5px 0"})}
`


const Textarea = styled.textarea`
    border: 0;
    margin: 10px 0;
    padding: 20px;
    outline: none;
    background: white;
    font-size: 16px;
    border:1px solid black;
    border-radius:10px;
    ${mobile({ margin: "10px"})}
`

const Button = styled.button`
    padding: 18px;
    background: white;
    color: black;
    font-size: 18px;
    border: 1px solid black;
    outline: none;
    cursor: pointer;
    width: 150px;
    margin: 20px auto 0;
    border-radius: 30px;

&:hover{
    border: 1px solid #021205;
    background: #ACDF87;
    transition: 1s;
    ${mobile({ width: "50px", fontSize: "10px"})}

`

const Contact = () => {
    return (
        <div className='contact' id='contact'>
      <Container>
          <Title>Contact Us</Title>
          <InputContainer>
              <Input placeholder='Name'/>
              <Input type= "email" placeholder='Email'/>
              <Input placeholder='Phone Number'/>
              <Textarea placeholder='Message'/>
              <Button type = "submit">
                <Send />
                </Button>
               
          </InputContainer>
      </Container>
      </div>
    )
  }
  
  export default Contact