import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../../redux/userAction'

const ManagerCart = ({el}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {el.userRole==='Manager'?<div>  
            <h1>{el.userRole}</h1>
            <h2>{el.firstName}</h2>
            <h3>{el.address}</h3>
            <h3>{el.email}</h3>
            <h3>{el.password}</h3>
                     <Button onClick={()=>dispatch(deleteUser(el._id))} >delete</Button>

</div>
            
       :<></>
       }
        </div>
    )
}

export default ManagerCart
