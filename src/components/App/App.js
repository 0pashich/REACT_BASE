import React from 'react'
import './App.css'
import Chat from '../Chats/ChatItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ButtonAppBar from '../AppBar/AppBar'
import PersistentDrawerLeft from '../Drawer/Drawer'

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

function App() {
  const [chats, setChats] = React.useState([
    { id: 'chat1', name: 'Чат 1' },
    { id: 'chat2', name: 'Чат 2' },
    { id: 'chat3', name: 'Чат 3' },
  ])
  const [currentChat, setCurrentChat] = React.useState(chats[0])


  return (
    <>
      {/* <ButtonAppBar /> */}
      <PersistentDrawerLeft chats={chats} currentChat={currentChat} />



    </>
  )

}


export default App