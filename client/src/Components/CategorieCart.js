import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteCategorie, getCategorielist } from '../redux/categorieAction'
import AddCategorie from './AddCategorie'

const CategorieCart = ({el}) => {
const dispatch = useDispatch()
    return (
             <div className="row" key={el._id}>
            <p> {el.name} </p>
            <div>
              <button onClick={() => dispatch(deleteCategorie(el._id),getCategorielist())}>
                Delete
              </button>
            </div>
          </div>
    )
}

export default CategorieCart
