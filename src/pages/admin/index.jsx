import {  Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { addProduct, getProducts } from '../../redux/productReducer/action';
import { useDispatch } from 'react-redux';

const initialState = {
    name: '',
    image: '',
    brand: '',
    price: '',
    category: '',
    gender: ''
}
const Admin = () => {
    const [product, setProduct] = useState(initialState);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev=>({...prev, [name]: name==="price"? +value: value}))
    }
    useEffect(() => {
        dispatch(getProducts());
    }, [])
    return (
        <DIV>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <TextField size='small' label="Product Name" type="text" name='name' value={product.name} onChange={(e)=>handleChange(e)} />
                <TextField size='small' label='Image link' type="text" name='image' value={product.image} onChange={(e)=>handleChange(e)}  />
                <TextField size='small' label='Product Brand' type="text" name='brand' value={product.brand} onChange={(e)=>handleChange(e)}  />
                <TextField size='small' label='Product Price' type="text" name='price' value={product.price} onChange={(e)=>handleChange(e)}  />
                <select onChange={(e) => handleChange(e)} name="category" value={product.category} className='category'>
                    <option >Select Category</option>
                    <option value="top-wear">Top wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="shirt">Shirt</option>
                    <option value="shoes">Shoes</option>

                </select>
                <select value={product.gender} onChange={(e)=>handleChange(e)} name="gender" className='gender'>
                    <option >Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="kids">Kids</option>
                </select>
                <Button type='submit' variant='outlined'> Add Prodcut</Button>
            </form>
        </DIV>
    )
}

export default Admin

const DIV = styled.div`
    width: 400px;
    margin: 0 auto;
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1{
        color: #06e0e0;
    }
 .category, TextField, .gender{
       height: 40px;
 }
`