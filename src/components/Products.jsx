import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { vinylProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { mobile } from '../responsive'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    jusify-content:space-between;
`
const FilterContainer = styled.div`
  padding: 25px;
  margin: 20px;
`
const Title = styled.h1`
margin-top: 100px;
align-items: center;
text-align: center;
font-size: 45px;
font-weight:600;
padding: 20px;
${mobile({fontSize: "18px"})} 

`



const Products = () => {
  const [products,showProducts] = useState ([]);

  useEffect(() => {
    axios.get("https://ecommerceversion2.herokuapp.com/jewelry").then(
      (response) => {
        showProducts(response.data);
      }
    );
  }, []);
  const Fillylow = () => {
    axios.get("https://ecommerceversion2.herokuapp.com/HighToLow").then(
      (response) => {
        showProducts(response.data);
      }
    );
  }
  const Fillyhigh = () => {
    axios.get("https://ecommerceversion2.herokuapp.com/LowToHigh").then(
      (response) => {
        showProducts(response.data);
      }
    );
  }
  const Fillyselect = () => {
    axios.get("https://ecommerceversion2.herokuapp.com/jewelry").then(
      (response) => {
        showProducts(response.data);
      }
    );
  };
  const filly2 =(param) => {
    if(param.target.value === 'low'){
      Fillylow()
    }
    if(param.target.value === 'high'){
      Fillyhigh()
    }
    if(param.target.value === 'select') {
      Fillyselect()
  }
}
  return (
    <div className='shop' id='shop'>
       <Title>Shop</Title>
           <FilterContainer>
        <label for="cars">Sort:</label>
    <select name="cars" onChange={filly2}>
           <option value="select">Select</option>
           <option value="low">Low to High</option>
           <option value="high">High to Low</option>
    </select>

</FilterContainer>
    <Container>
        {products.map((item)=>(
            <Product item ={item} key={item.id}/>
        ))}
    </Container>
    </div>
  )
}
export default Products




