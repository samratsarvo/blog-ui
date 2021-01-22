import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) => {
    const { id } = props.match.params
    const [ user,setUser ] = useState({})
    const [ posts,setPosts ] = useState([])
    

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=> {
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=> {
            const result = response.data
            console.log(result)
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [id])

    return (
        <div>
            <h1>USER NAME: {user.name}</h1>
            <h2>POST WRITTEN BY USER</h2>

            { posts.map((ele,i)=> {
                return <li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
            })}
        </div>
    )
}

export default UserShow