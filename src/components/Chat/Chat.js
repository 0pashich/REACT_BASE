import React from 'react'
import { Redirect, useParams } from 'react-router'
//import Message from '../Message/Message'
import InputMessage from '../Input/InputMessage'
//import { AUTHORS } from '../App/constants'
import { useDispatch, useSelector } from 'react-redux'
//import { addMessage, addMessageWithThunk } from '../../actions/messages'
import { addMessageWithThunk } from '../../actions/messages'
import { useIsChatExists } from '../../hooks/useIsChatExists'



import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box'

import Paper from '@material-ui/core/Paper';


import { setCurrentChat } from './../../actions/ui';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between;',
    },
    content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',

        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        paddingBottom: 70,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        paddingBottom: 70,
    },
    title: {
        flexGrow: 1,
    },
    footer: {
        padding: theme.spacing(1, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        position: "fixed",
        bottom: "0",
        width: '100%',
        left: '0',

    },
    input: {
        padding: theme.spacing(0, 1),
        // margin: theme.spacing(2, 2),

    },
    messageOwn: {
        padding: theme.spacing(2, 2),
        margin: theme.spacing(2, 0, 2, 4),

    },
    messageOther: {
        padding: theme.spacing(2, 2),
        margin: theme.spacing(2, 4, 2, 0),

    },
    form: {
        display: 'flex',

    },
    submitButton: {
        alignItems: 'flex-end',
    },
    width: {
        width: '100%',
    }
}));





const Chat = (props) => {
    const { chatId } = useParams()
    const classes = useStyles();
    // const theme = useTheme();
    // console.log('chatId', chatId)
    // const open = ui.drawerOpen;
    // const chats = useSelector((state) => state.chats[chatId] || [])
    const messageList = useSelector((state) => state.messages[chatId] || [])
    const ui = useSelector((state) => state.ui)
    const dispatch = useDispatch()
    //console.log(!ui.currentChat.hasOwnProperty('id'))

    if (ui.currentChat.hasOwnProperty('id') === false) {
        dispatch(setCurrentChat(chatId));
        console.log('setDefaultChat')
    }
    // // Object.values(chats)[0].id

    const { name } = useSelector((state) => state.profile)

    // TODO: этот кусок переедет в редакс в рамках 7го урока
    // React.useEffect(() => {
    //     if (
    //         prevMessageList?.length < messageList.length &&
    //         messageList[messageList.length - 1].author !== AUTHORS.BOT
    //     ) {
    //         timer.current = setTimeout(
    //             () =>
    //                 setMessageList((currentMessageList) => [
    //                     ...currentMessageList,
    //                     { author: AUTHORS.BOT, text: 'Привет' },
    //                 ]),
    //             1500
    //         )
    //     }
    // }, [messageList, prevMessageList])

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            addMessageWithThunk(ui.currentChat.id, {
                id: `message${Date.now()}`,
                author: name,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/" />
    }

    return (



        <div className={classes.width}>




            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: ui.drawerOpen,
                })}
            >
                <div className={classes.drawerHeader} />

                {messageList.length ? (


                    messageList.map((message) => (


                        // <Message
                        //     key={message.id}
                        //     text={message.text}
                        //     author={message.author}
                        // />
                        <Paper key={message.id} elevation={3} className={(name === message.author) ? classes.messageOwn : classes.messageOther} >
                            <Typography align='justify' color={(name === message.author) ? 'textSecondary' : 'textPrimary'} variant='body1'>
                                {message.author}: {message.text}
                            </Typography>
                        </Paper>

                    ))


                ) : null}


                {/* 
                <Paper elevation={3} className={classes.messageOwn} >
                    <Typography align='justify' color='textSecondary' variant='body1'>
                        Своё
                    </Typography>
                </Paper>
                <Paper elevation={3} className={classes.messageOther} >
                    <Typography align='justify' color='textPrimary' variant='body1'>
                        Чужое
                    </Typography>
                </Paper> */}


            </main>
            <footer className={classes.footer} p={1}>
                <Box className={clsx(classes.appBar, {
                    [classes.appBarShift]: ui.drawerOpen,
                })}>
                    {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
                    {/* className="app__form bordered" */}
                    <InputMessage onSubmit={handleMessageSubmit} />
                </Box>
            </footer>
        </div>



    )
}

export default Chat






