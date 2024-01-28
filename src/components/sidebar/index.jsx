import { Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGender = searchParams.getAll("gender");
  const initialCategory = searchParams.getAll("category");
  const [gender, setGender] = useState(initialGender || []);
  const [category, setCategory] = useState( initialCategory || []);

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value)) {
      newGender = newGender.filter(el => el !== value)
    } else {
      newGender.push(value)
    }
    setGender(newGender);
  }
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)){
      newCategory= newCategory.filter(el=> el!==value)
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  }

  useEffect(() => {
    let params = { gender, category }
    setSearchParams(params)
  }, [gender, category])
  
  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div >
        <Checkbox value={"male"} onChange={ handleGender} checked={gender.includes("male")} />
        <label >Men</label>
      </div>
      <div >
        <Checkbox value={"female"} onChange={ handleGender} checked={gender.includes("female")} />
        <label >Women</label>
      </div>
      <div >
        <Checkbox value={"kids"} onChange={ handleGender} checked={gender.includes("kids")} />
        <label >Kids</label>
      </div>
      <hr />
      <h3>Filter by Category</h3>
      <div >
        <Checkbox value={"top-wear"}  onChange={handleCategoryChange} checked={category.includes("top-wear")} />
        <label >Top wear</label>
      </div>
      <div >
        <Checkbox value={"bottom-wear"} onChange={handleCategoryChange} checked={category.includes("bottom-wear")} />
        <label >Bottom wear</label>
      </div>
      <div >
        <Checkbox value={"shoes"} onChange={handleCategoryChange} checked={category.includes("shoes")} />
        <label >Shoes</label>
      </div>
      <hr />
      <h3>Sort by Price</h3>
      <div>
        <input type="radio" name='order' />
        <label> Ascending</label>
      </div>
      <div>
        <input type="radio" name='order' />
        <label> Descending</label>
      </div>
    </DIV>
  )
}

export default Sidebar

const DIV = styled.div`
text-align: left;
  div{
    display: flex;
    align-items: center;
  }
`