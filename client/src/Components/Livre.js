import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductlist } from '../redux/productAction'
import Home from './Home'
import Navbare from './Navbare'
// import ProductCard from './ProductCard'
import ProductList from './ProductList'

const Livre = () => {
  const {products,loading} = useSelector(state => state.allproduct)
const dispatch = useDispatch()


    return (
        <div>
          <Navbare/>
{products.filter((el)=>el.category=='livre')}
<Home/>
   </div>
    )
}

export default Livre
