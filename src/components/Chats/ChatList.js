import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
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

import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, removeChat } from '../../actions/chats'

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
    block: {
        display: 'block',
    }
}));

export default function ChatList(props) {

    //Props and handle for close Drawer
    const { open, setOpen, currentChat, setCurrentChat } = props
    const handleDrawerClose = () => {
        setOpen(false);
    };
    //---------------------------------

    const inputRef = React.useRef();

    const history = useHistory()

    const chats = useSelector((state) => state.chats)
    //console.log(chats)
    const dispatch = useDispatch()


    const handleAddChat = (name) => {
        dispatch(addChat(`chat${Date.now()}`, name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChat(chatId))
    }




    const classes = useStyles();
    const theme = useTheme();
    // const [open, setOpen] = React.useState(false);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };


    const [openInput, setOpenInput] = React.useState(false);
    const handleAddInputChat = () => {
        //  console.log('Open Input')
        // console.log(openInput)
        setOpenInput(true)
        //inputRef.focus();
        // console.log({ inputRef })
        setTimeout(() => { inputRef.current.focus() }, 10)
        //    console.log(openInput)
    }
    //  const { onSubmit } = props
    const [inputNameChatValue, setinputNameChatValue] = React.useState('')

    const handleNameChatChange = (e) => {
        //  console.log(inputNameChatValue)
        setinputNameChatValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        handleAddChat(inputNameChatValue)
        setinputNameChatValue('')
        setOpenInput(false)

    }

    const handleChatLinkClick = (chat) => {
        // historyPush(`/chats/${chat.id}`)
        console.log('handleChatLinkClick', chat)
        setCurrentChat(chat)
        history.push(`/chats/${chat.id}`)
    }



    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton
                    edge="end"
                    // aria-label="account of current user"
                    // aria-controls={menuId}
                    // aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    onClick={handleAddInputChat}
                    color="inherit"
                >
                    <AddIcon />
                </IconButton>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {Object.values(chats).map((chat, index) => (
                    <ListItem button key={chat.id} component="a" selected={chat.id === currentChat.id} onClick={() => handleChatLinkClick(chat)}>
                        {/* selected={selectedIndex === index} */}
                        {/* <ListItemIcon> <ChatIcon /> </ListItemIcon> */}
                        <ListItemText primary={chat.name} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveChat(chat.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                <ListItem >
                    <form
                        className={clsx(classes.hide, openInput && classes.form)}
                        //{clsx(classes.form, { [classes.hide]: openInput, } )}
                        //{clsx(classes.form, openInput && classes.hide)}
                        noValidate autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            disableUnderline
                            fullWidth
                            required
                            inputRef={inputRef}
                            // className="child__text-field bordered"
                            variant="outlined"
                            label="Chat name"
                            placeholder="Enter new chat name"
                            value={inputNameChatValue}
                            onChange={handleNameChatChange}
                        // onSubmit={handleAddChat}




                        />

                        {/* <TextField id="outlined-basic" label="New chat" variant="outlined" size='small' fullWidth required /> */}
                        {/* value={name} onChange={handleChange} */}
                        <IconButton edge="end" aria-label="delete" size='small' type="submit">
                            <DoneIcon />
                        </IconButton>
                    </form>
                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} /> */}
                </ListItem>

            </List>
            {/* <Divider /> */}

            {/* <List>
                    <ListItem>
                        <form className={classes.root} noValidate autoComplete="off">
                            <Input
                                disableUnderline
                                fullWidth
                                required
                                autoFocus
                                // className="child__text-field bordered"
                                variant="outlined"
                                label="Сообщение"
                                placeholder="Введите сообщение"
                                value={inputValue}
                                onChange={handleChange}
                            /> */}

            {/* <TextField id="outlined-basic" label="New chat" variant="outlined" size='small' fullWidth required /> */}
            {/* value={name} onChange={handleChange} */}
            {/* <IconButton edge="end" aria-label="delete" size='small' >
                                <DoneIcon />
                            </IconButton>
                        </form> */}
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} /> */}
            {/* </ListItem>

                </List> */}
            {/* //       <List className="app__sidebar" subheader="Список чатов">
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
//       </List> */}

        </Drawer>

    );
}
