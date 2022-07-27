import styled from 'styled-components'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from "react"
import { mobile } from "../responsive"


const Container = styled.div`
margin: 0;
`

const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin:20px;
    ${mobile({width: "0px 20px" , display: "flex", flexDirection:"column"})}
`

const FilterText= styled.span`
    font-size:20px;
    font-weight:600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
    ${mobile({margin: "10px 0px"})}
`
const Option = styled.option``



const FilterList = () => {
    const location = useLocation();
    const [filters,setFilters] = useState({});
    const [setSort] = useState("newest");


    const handleFilters =(e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }
    // return (

//     <FilterContainer>
//     <Filter><FilterText>Sort Products:</FilterText>
//     <Select onChange={(e)=>setSort(e.target.value)}>
//         <Option value= "newest"> Newest</Option>
//         <Option value = "asc"> High to Low</Option>
//         <Option value= "desc">Low to High</Option>
//     </Select>
//     </Filter>
// </FilterContainer>
//   )
// }
}
export default FilterList