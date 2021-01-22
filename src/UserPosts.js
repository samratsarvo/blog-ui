import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserPosts = (props) => {
    const { id } = props.match.params
    const [ user,setUser ] = useState('')
    const [ posts,setPosts ] = useState({})
    const [ comments,setComments ] = useState([])

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then((response)=> {
            const result = response.data[0]
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=> {
            const result = response.data
            setComments(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [id])

    useEffect(()=> {
        if(posts.userId){
        axios.get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
        .then((response)=> {
            const result = response.data.name
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    
        }
    }, [posts.userId])


    return (
        <div>
            <h1>USER NAME: {user}</h1>
            <h1>TITLE: {posts.title}</h1>
            <h2>BODY: </h2>
            {posts.body} <hr/>
            <h2>Comments </h2>
            <ul>
            {comments.map((ele,i)=> {
                return <li key={i}> {ele.body} </li>
            })} 
            </ul>
            <hr/>

            <Link to={`/users/${posts.userId}`}> more post of author: {user} </Link>
        </div>
    )
}

export default UserPosts

