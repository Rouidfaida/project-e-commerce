import React from 'react'
import { useSelector } from 'react-redux'
import CategorieCart from './CategorieCart'

const CategorieList = ({categorie}) => {

    return (
        <div style={{display:"flex"}}>
           {
               categorie.map((el,i)=><CategorieCart el={el} key={i}/>)
           } 
        </div>
    )
}

export default CategorieList
