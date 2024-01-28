import React from 'react'
import styled from 'styled-components'

const ProductCard = ({ name, image, category, price, brand, gender }) => {
  return (
    <DIV>

      <img width='100%' src={image} alt="" />
      <p>{name}</p>
      <h4>price: {price}</h4>
      <p>category: {category}</p>
      <p>Brand: {brand}</p>
      <p>gender: {gender}</p>
    </DIV>
  )
}

export default ProductCard

const DIV = styled.div`
width: 300px;
border: 1px solid gray;
`