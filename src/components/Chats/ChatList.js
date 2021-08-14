import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Input from '@material-ui/core/Input';
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, removeChat, addChatWithFirebase, deleteChatWithFirebase, subscribeOnChatsChangings } from '../../actions/chats'
import { setCurrentChat, setDrawerOpen } from '../../actions/ui'


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
        width: 1
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
    const ui = useSelector((state) => state.ui)
    const chats = useSelector((state) => state.chats)
    const dispatch = useDispatch()
    const currentChat = useSelector((state) => state.ui.currentChat)
    if (Object.keys(currentChat).length === 0) {
        dispatch(setCurrentChat(Object.values(chats)[0]))
    }

    const handleDrawerClose = () => {
        dispatch(setDrawerOpen(false));
    };

    const inputRef = React.useRef();
    const history = useHistory()

    const handleAddChat = (name) => {
        dispatch(addChatWithFirebase(`chat${Date.now()}`, name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(deleteChatWithFirebase(chatId))
    }

    const classes = useStyles();
    const theme = useTheme();

    const [openInput, setOpenInput] = React.useState(false);
    const handleAddInputChat = () => {
        setOpenInput(true)
        setTimeout(() => { inputRef.current.focus() }, 10)
    }

    const [inputNameChatValue, setinputNameChatValue] = React.useState('')

    const handleNameChatChange = (e) => {
        setinputNameChatValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddChat(inputNameChatValue)
        setinputNameChatValue('')
        setOpenInput(false)

    }

    const handleChatLinkClick = (chat) => {
        dispatch(setCurrentChat(chat));
        history.push(`/chats/${chat.id}`)
    }

    console.log('ui', Object.values(chats)[0].id)

    React.useEffect(() => {
        dispatch(subscribeOnChatsChangings())
    }, [])


    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={ui.drawerOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton
                    edge="end"
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
                        noValidate autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <Input
                            disableUnderline
                            fullWidth
                            required
                            inputRef={inputRef}
                            variant="outlined"
                            label="Chat name"
                            placeholder="Enter new chat name"
                            value={inputNameChatValue}
                            onChange={handleNameChatChange}
                        />
                        <IconButton edge="end" aria-label="delete" size='small' type="submit">
                            <DoneIcon />
                        </IconButton>
                    </form>
                </ListItem>
            </List>
        </Drawer>
    );
}
