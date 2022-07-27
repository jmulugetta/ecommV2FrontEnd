import { Badge } from '@material-ui/core';
import { Search, ShoppingCartRounded } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import JLOGO from '../Image/JLOGO.png'
import { mobile, tablet } from '../responsive';



const Container =  styled.div`
    height: 100px;
    ${mobile({ height: "80px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`;

const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;
// const Logo = styled.h1`
//     font-family: 'Gothic A1', sans-serif
//     font-weight: bold;
// `;
const Logo = styled.img.attrs({
    src: `${JLOGO}`
})`
  font-weight: 900;
  width: 300px;
  height: 300px;
  ${mobile({width: "170px",height: "170px"})}

`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-content: space-between;
    text-decoration: none;
    ${mobile({flex: 2, justifyContent: "center", marginRight: "10px", flexDirection: "column", alignItems: "flex-end"})}
    ${tablet({flex: 2, justifyContent: "center", marginRight: "10px", flexDirection: "column", alignItems: "flex-end"})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    list-style: none;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

//using style components to simplify code
const NavBar = () => {

    const [setClick] = useState(false)
    const closeMenu = () => setClick(false)
    
  return (
     <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search"/> 
                    <Search style={{color: "gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo/>
            </Center>
            <Right>
                <MenuItem><a href='/' onClick={closeMenu}>HOME</a> </MenuItem>
                <MenuItem><a href='#shop' onClick={closeMenu}>SHOP</a></MenuItem>
                <MenuItem><a href='#about' onClick={closeMenu}>ABOUT</a></MenuItem>
                <MenuItem><a href='#contact' onClick={closeMenu}>CONTACT</a></MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                   <ShoppingCartRounded/>
                </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
     </Container>   
  )
}

export default NavBar