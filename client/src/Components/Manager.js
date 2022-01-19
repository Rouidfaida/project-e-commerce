import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { getCategorielist } from '../redux/categorieAction'
import { getProduct, getProductlist } from '../redux/productAction'
import { getUsers } from '../redux/userAction'
import AddProduct from './AddProduct'
import AddUser from './UsersList'
import CategorieList from './CategorieList'
import Home from './Home'
import Login from './Login'
import Navbare from './Navbare'
import ProductList from './ProductList'
import ProductListAdmin from './ProductListAdmin'
import UsersList from './UsersList'
import NavBarAdmin from './NavBarAdmin'

const Manager = () => {
    const {users} = useSelector(state => state.alluser)
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
    const {categories} = useSelector(state => state.allcategorie)

    useEffect(() => {
        dispatch(getProductlist(),getCategorielist())
          
      }, [])
    return (
        <div> 
            <NavBarAdmin/>
<ProductListAdmin product={products}/>
<CategorieList categorie={categories}/>
<Link to='/getuse'>
<button onClick={()=>dispatch(getUsers())} >get users</button>
</Link>
{/* <UsersList/> */}
</div>
    )
}

export default Manager
