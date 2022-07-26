import { EmailRounded, Facebook, HomeRounded, Instagram, LocalPhone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import JLOGO from '../Image/JLOGO.png'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    background: beige;
    ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`


const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h3`
    margin-bottom:15px;
    margin-top:30px;
    font-size: 25px;
    font-weight: bold;
`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    font-size: 20px;
    ${mobile({ fontSize:"15px" })}
`


const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
    cursor:pointer;

    &:hover{
        text-decoration:underline;
}`
 
const Logo = styled.img.attrs({
    src: `${JLOGO}`
})`
    font-weight: 900;
    width: 200px;
    height: 200px;
    ${mobile({width:"300px",height: "300px", alignItems: "center"})}
    `;

// const Logo = styled.h1`
//     font-family: 'Gothic A1', sans-serif
//     font-weight: bold;
// `

const SocialContainer = styled.div`
    display: flex;
    margin-left: 60px;
`

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: enter;
    cursor: pointer;
    ${mobile({ marginRight: "10px", fontSize:"50px"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`



const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo/>
        <SocialContainer>
            <SocialIcon>
                <Facebook/>
            </SocialIcon>
            <SocialIcon>
                <Instagram/>
            </SocialIcon>
            <SocialIcon>
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Adresses</Title>
            <ContactItem>
                <HomeRounded style={{marginRight:'10px'}}/> 1098 Charlote NC 15732
            </ContactItem>
            <ContactItem>
                <LocalPhone style={{marginRight:'10px'}}/> +1 704 - 928 - 654
            </ContactItem>
            <ContactItem>
                <EmailRounded style={{marginRight:'10px'}}/> jmulugetta777@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer