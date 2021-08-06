import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App/App.css'
import App from '../App/App'
import Chat from '../Chat/Chat'
import Profile from '../Profile/Profile'

export default function Router() {
    return (
        <div>
            <div className="bordered">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <Switch>
                <Route path="/" exact component={App} />

                <Route exact path="/chats" render={() => <p>Chats page</p>} />

                <Route path="/chats/:chatId" render={() => <Chat />} />

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route>
                    <p>404: not found</p>
                </Route>
            </Switch>
        </div>
    )
}