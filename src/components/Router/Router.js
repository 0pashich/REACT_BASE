import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Profile from '../Profile/Profile'
import Home from '../Home/index'
import News from '../News/index'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)
    console.log("isAuthed" < isAuthed)
    
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}


function PublicRoute({ authenticated, ...rest }) {
    return !authenticated ? <Route {...rest} /> : <Redirect to="/chats" />;
}


export default function Router(props) {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <PrivateRoute exact path="/chats" render={() => <p>Chats page</p>} />

            <PrivateRoute path="/chats/:chatId" component={Chat} />

            <Route path="/news" component={News} />

            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>

            <Route path="/login">
                <Login />
            </Route>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>

    )
}