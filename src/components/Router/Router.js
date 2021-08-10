import React from 'react'
import { Switch, Route } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'
import Profile from '../Profile/Profile'
import Home from '../Home/index'

export default function Router(props) {
   return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route exact path="/chats" render={() => <p>Chats page</p>} />

            <Route path="/chats/:chatId" component={Chat} />

            <Route path="/profile">
                <Profile />
            </Route>

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>

    )
}