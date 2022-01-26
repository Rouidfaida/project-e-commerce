import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../../redux/userAction'

const Admin = () => {
    const {users,loading} = useSelector(state => state.alluser)
const dispatch = useDispatch()
    return (
        <div>
                        <NavBarAdmin/>

            <Link to='/getmanager'>
<button onClick={()=>dispatch(getUsers())} >get users</button>
</Link>
       </div>
    )
}

export default Admin
