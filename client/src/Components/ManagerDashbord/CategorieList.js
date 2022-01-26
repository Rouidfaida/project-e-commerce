import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorielist } from '../../redux/categorieAction'
import NavBarAdmin from '../Admin/NavBarAdmin'
import AddCategorie from './AddCategorie'
import CategorieCart from './CategorieCart'

const CategorieList = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.allcategorie)

    useEffect(() => {
        dispatch(getCategorielist())
          
      }, [])
    return (
        <div>            <NavBarAdmin/>
        <AddCategorie/>
        <div style={{display:"flex"}}>
           {
               categories.map((el,i)=><CategorieCart el={el} key={i}/>)
           } 
        </div>
        </div>

    )
}

export default CategorieList
