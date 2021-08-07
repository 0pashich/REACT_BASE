import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import '../App/App.css'
import App from '../App/App'
import Chat from '../Chat/Chat'
import Profile from '../Profile/Profile'
import ChatList from '../Chats/ChatList'
import Home from '../Home/index'

export default function Router(props) {
    const { open, setOpen } = props



    return (
        <div>
            {/* <div className="bordered">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
            </div> */}
            {/* <ChatList open={open} setOpen={setOpen} /> */}



            <Switch>
                <Route path="/" exact component={Home} />

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