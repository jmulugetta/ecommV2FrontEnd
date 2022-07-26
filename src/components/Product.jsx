import { FavoriteBorderRounded, ShoppingBasketRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0; 
    left: 0;
    background-color:rgba(0,0,0,0.1);
    z-index: 3; 
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    
`
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center
    justify-content:center;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }
`

const Image = styled.img`
    border-radius: 8px;
    height:80%;     
    z-index:2;
    object-fit: cover;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.2);
    }
`
const Title = styled.h2`
    padding-top: 10px;
    font-size: 18px;
    font-weight: 600px;
    text-align: center;
    font-weight: bold;
`
const Desc = styled.h3`
    font-size: 13px;
    text-align: center;
    padding: 1px;
`
const Price = styled.h3`
    text-align: center;
    font-weight: bold;
`
const InfoContainer = styled.div`
    display: flex;
    margin: 10px;
    padding: 5px;
    flex-direction: column;

`
const Product = ({item}) => {
  return (
    <Container>
        <InfoContainer>
        <Image src ={item.img}/>
        <Title>{item.name}</Title>
        <Desc>{item.description}</Desc>
        <Price>{item.price}</Price>
        </InfoContainer>
        <Info>
            <Icon>
                <ShoppingBasketRounded/>
            </Icon>
            <Icon>
                <FavoriteBorderRounded/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product