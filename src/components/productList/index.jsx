import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productReducer/action';
import ProductCard from '../productCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  // Accessing the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Using hooks to access the URL parameters and current location
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Selecting the products from the Redux store
  const products = useSelector(store => store?.productReducer?.products);

  // Creating an object with parameters based on URL query parameters
  let obj = {
    gender: searchParams.getAll("gender"),
    category: searchParams.getAll("category")
  };


  // Using useEffect to dispatch the getProducts action when the URL search changes
  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);

  // Rendering the component with a grid layout and ProductCard components
  return (
    <DIV>
      {products?.map((el, index) => {
        return <ProductCard key={index} {...el} />;
      })}
    </DIV>
  );
};

// Styling the container with styled-components
const DIV = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 300px 300px 300px 300px;
  justify-content: right;
`;

export default ProductList;
