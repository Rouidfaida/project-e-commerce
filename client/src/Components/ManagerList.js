import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../redux/userAction'
import AddManager from './AddManager'
import ManagerCart from './ManagerCart'

const ManagerList = () => {
    const {users} = useSelector(state => state.alluser)

    return (
        <div>
          <AddManager/>
            {users.map((el,i)=><ManagerCart el={el} key={i}/>)}
        </div>
    )
}

export default ManagerList
