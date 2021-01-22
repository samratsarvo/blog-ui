import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Post = (props) => {
    const [ posts,setPosts ] = useState([])

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response)=> {
            const result = response.data
            setPosts(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }, [])

    return (
        <div>
            <h1>Total Posts: {posts.length}</h1>
            { posts.map((ele,i)=> {
                return <li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
            }) }
        </div>
    )
}

export default Post