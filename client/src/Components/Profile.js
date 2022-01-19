import React from 'react'
import { useSelector } from 'react-redux'
import Swal from "sweetalert2/dist/sweetalert2.js";

const Profile = () => {
    const {users} = useSelector(state => state.alluser)

    return (
        <div>
            <h1>{users.firstName}</h1>
<button onClick={()=>Swal.fire("Bienvenue!", `Mrs/Mm ${users.firstName}`, "success")
}>Sallutation</button>
        </div>
    )
}

export default Profile
