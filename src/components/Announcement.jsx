import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

 const Container = styled.div`
    height: 50px;
    background-color: #3A5311;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 800;
    text-align: center;
    ${mobile({fontSize:"14px",flexWrap: "wrap", width: "100%"})}
 `


function Announcement() {
  return (
    <Container>
        Jewelry that never turns green, without spending too much green.
    </Container>
  )
}

export default Announcement
