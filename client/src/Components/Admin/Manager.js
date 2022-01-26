import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { getCategorielist } from '../../redux/categorieAction'
import { getProductlist } from '../../redux/productAction'
import ProductListAdmin from '../ManagerDashbord/ProductListAdmin'
import { getUsers } from '../../redux/userAction'
import NavBarAdmin from './NavBarAdmin'
import CategorieList from '../ManagerDashbord/CategorieList'

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
{/* <ProductListAdmin product={products}/>
<CategorieList categorie={categories}/>
<Link to='/getuse'>
<button onClick={()=>dispatch(getUsers())} >get users</button>
</Link> */}
{/* <UsersList/> */}
</div>
    )
}

export default Manager
