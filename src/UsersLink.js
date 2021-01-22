import React, { userState, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserList = (props) => {
    const [users,setUsers] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            const result = response.data
            setUsers(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [])
    return (
        <div>
            <h2>Users List: { users.length }</h2>
            
                { users.map((ele,id)=> {
                    return <li key={id}> <Link to={`/users/${ele.id}`}>{ele.name}</Link> </li>
                }) }
            
        </div>
    )
}

export default UserList