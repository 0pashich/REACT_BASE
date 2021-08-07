import React from 'react'
import './App.css'
import Chat from '../Chats/ChatItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Bar from '../AppBar/AppBar'
import PersistentDrawerLeft from '../Drawer/Drawer'
import ChatList from '../Chats/ChatList'
import Router from '../Router/Router'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ViewListIcon from '@material-ui/icons/ViewList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import ChatIcon from '@material-ui/icons/Chat';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux'


// function App() {
//   const [chats, setChats] = React.useState([
//     { id: 'chat1', name: 'Чат 1' },
//     { id: 'chat2', name: 'Чат 2' },
//     { id: 'chat3', name: 'Чат 3' },
//   ])
//   const [currentChat, setCurrentChat] = React.useState(chats[0])

//   const handleChangeChat = (chat) => setCurrentChat(chat)

//   return (
//     <div className="app app__content app__content_row">
//       <List className="app__sidebar" subheader="Список чатов">
//         {chats.map((chat) => (
//           <ListItem
//             button
//             key={chat.id}
//             selected={chat.id === currentChat.id}
//             onClick={() => handleChangeChat(chat)}
//           >
//             {chat.name}
//           </ListItem>
//         ))}
//       </List>

//       <div className="app__main">
//         <Chat id={currentChat.id} />
//       </div>
//     </div>
//   )
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  }
}));


function App() {
  // const [chats, setChats] = React.useState([
  //   { id: 'chat1', name: 'Чат 1' },
  //   { id: 'chat2', name: 'Чат 2' },
  //   { id: 'chat3', name: 'Чат 3' },
  // ])


  const chats = useSelector((state) => state.chats)
  const [currentChat, setCurrentChat] = React.useState(Object.values(chats)[0])
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  console.log('curentChat:', currentChat)

  return (
    <div className={classes.root} >
      <CssBaseline />

      {/* <PersistentDrawerLeft chats={chats} currentChat={currentChat} /> */}
      <Bar open={open} setOpen={setOpen} />
      <ChatList open={open} setOpen={setOpen} chats={chats} currentChat={currentChat} setCurrentChat={setCurrentChat} />
      <Router open={open} setOpen={setOpen} />
      {/* <ButtonAppBar /> */}
    </div >
  )

}


export default App