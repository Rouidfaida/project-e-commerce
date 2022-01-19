import { List } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorielist } from '../redux/categorieAction'
import { filterProduct } from '../redux/productAction'

const Filter = () => {
    const categories = useSelector(state => state.allcategorie)
    const [category, setCategory] = useState('')
    const handleCategory = (e) => {
        setCategory(e.target.value);
        dispatch(filterProduct(e.target.value))
      };
      const dispatch = useDispatch();
      useEffect (() => {
        dispatch(getCategorielist());
      }, [dispatch]);
    return (
        <div>
     <Form.Select  label="categorie" value={category} onChange={handleCategory}>
  <option value="all">All Products</option>
  {categories.categories.map((category) => (
              <option value={ category.name} key={category._id}>
                     {category.name}
              </option>
 ))}
  
</Form.Select>
          {/* <select name="category" value={category} onChange={handleCategory}>
            <option value="all" >All Products</option>
            {categories.categories.map((category) => (
              <option value={ category.name} key={category._id}>
                {category.name}
              </option>
            ))}
          </select> */}
             
        
      </div>
    )
}

export default Filter
