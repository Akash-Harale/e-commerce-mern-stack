import React from 'react'
import Navbar from '../../components/navbar'
import ProductList from '../../components/productList'
import Sidebar from '../../components/sidebar'
import styled from 'styled-components'

const Home = () => {
  return (
    <DIV>
      <div className='sidebar'>
        <Sidebar />
      </div >
      <div className='productList'> 
        <ProductList />
    </div>
    </DIV>
  )
}

export default Home

const DIV= styled.div`
display: flex;
justify-content: space-between;
.sidebar{
  margin-left: 20px;
  position: fixed;
}
.productList{
  margin-left: 250px;
}
`