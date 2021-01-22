import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './HomeLink'
import Users from './UsersLink'
import Post from './PostLink'
import UserShow from './UserShow'
import UserPosts from './UserPosts'

const App = (props) => {
    return(
        <div> 
            <Link to='/'>Home | </Link>
            <Link to='/users'>Users | </Link>
            <Link to='/posts'>Post </Link>

            <Route path='/' component={Home}  exact={true}/>
            <Route path='/users' component={Users}  exact={true}/>
            <Route path='/posts' component={Post} exact={true} />
            <Route path='/users/:id' component={UserShow}  />
            <Route path='/posts/:id' component={UserPosts}  />
        </div>
    )
}
export default App