import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { addProduct, getProducts } from '../../redux/productReducer/action';
import { useDispatch } from 'react-redux';

// Initial state for the product form
const initialState = {
    name: '',
    image: '',
    brand: '',
    price: '',
    category: '',
    gender: ''
}

// Main functional component for the admin page
const Admin = () => {
    // State to manage the product form data
    const [product, setProduct] = useState(initialState);

    // Redux dispatch function
    const dispatch = useDispatch();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatching the action to add a product with the current product data
        dispatch(addProduct(product));
    }

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        // Destructuring the name and value from the input event
        const { name, value } = e.target;
        // Updating the product state based on the input name
        setProduct(prev => ({ ...prev, [name]: name === "price" ? +value : value }));
    }

    // useEffect hook to dispatch an action to get products when the component mounts
    useEffect(() => {
        dispatch(getProducts());
    }, [])

    // JSX rendering of the admin form
    return (
        <DIV>
            {/* Heading for the admin page */}
            <h1>Add Product</h1>
            {/* Form for adding a new product */}
            <form onSubmit={handleSubmit}>
                {/* Input field for the product name */}
                <TextField size='small' label="Product Name" type="text" name='name' value={product.name} onChange={(e) => handleChange(e)} />
                {/* Input field for the product image link */}
                <TextField size='small' label='Image link' type="text" name='image' value={product.image} onChange={(e) => handleChange(e)} />
                {/* Input field for the product brand */}
                <TextField size='small' label='Product Brand' type="text" name='brand' value={product.brand} onChange={(e) => handleChange(e)} />
                {/* Input field for the product price */}
                <TextField size='small' label='Product Price' type="text" name='price' value={product.price} onChange={(e) => handleChange(e)} />
                {/* Dropdown for selecting the product category */}
                <select onChange={(e) => handleChange(e)} name="category" value={product.category} className='category'>
                    <option>Select Category</option>
                    <option value="top-wear">Top wear</option>
                    <option value="bottom-wear">Bottom Wear</option>
                    <option value="shirt">Shirt</option>
                    <option value="shoes">Shoes</option>
                </select>
                {/* Dropdown for selecting the product gender */}
                <select value={product.gender} onChange={(e) => handleChange(e)} name="gender" className='gender'>
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="kids">Kids</option>
                </select>
                {/* Button to submit the form and add the product */}
                <Button type='submit' variant='outlined'> Add Product</Button>
            </form>
        </DIV>
    )
}

// Styled component for styling the admin page
const DIV = styled.div`
    width: 400px;
    margin: 0 auto;
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h1 {
        color: #06e0e0;
    }
    .category, TextField, .gender {
        height: 40px;
    }
`
// Exporting the Admin component
export default Admin
