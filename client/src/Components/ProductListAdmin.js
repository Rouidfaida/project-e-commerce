import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct, getProductlist } from '../redux/productAction'
import AddCategorie from './AddCategorie'
import AddProduct from './AddProduct'
import ProductCartAdmin from './ProductCartAdmin'

const ProductListAdmin = ({product}) => {
    
    const {loading,categorySelected} = useSelector(state => state.allproduct)
  const dispatch = useDispatch()

useEffect(() => {
    dispatch(getProductlist())
      
  }, [])
    return (
      <div>
            <div style={{display:"flex",marginLeft:"250px",justifyContent:"center"}}> <AddCategorie/>
            <AddProduct/> 
            </div>
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"200px",marginTop:"50px",marginRight:"150px"}}>
                       
           {product.filter((product) => {
          if (categorySelected !== "all" ) return product.category === categorySelected
          else return true 
        }).map((el,i) => <ProductCartAdmin el={el} key={i} />)}
        </div>
        </div>
    )
}

export default ProductListAdmin
