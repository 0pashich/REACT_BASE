import React from 'react'
import './App.css'
import Bar from '../AppBar/AppBar'
import ChatList from '../Chats/ChatList'
import Router from '../Router/Router'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));


function App() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <div className={classes.root} >
      <CssBaseline />
      <Bar />
      <ChatList />
      <Router />

    </div >
  )

}


export default App