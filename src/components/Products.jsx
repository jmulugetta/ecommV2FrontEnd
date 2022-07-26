import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { jewelryProducts } from '../data'
import Product from './Product'
import Axios from 'axios'


const Container = styled.div`
     padding: 20px;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     padding-top: 150px;
`


const Products = () => {

  const [products, showProducts] = useState([]);

useEffect(() => {
  Axios.get("https://ecommerceversion2.herokuapp.com/jewelry").then((response) => {
    showProducts(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[]);

  return (
    <div className='shop' id='shop'>
    <Container>
        {products.map((item)=>(
            <Product item ={item} key={item.id}/>

        ))}
    </Container>
    </div>
  )
}

export default Products
