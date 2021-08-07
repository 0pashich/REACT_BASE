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
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

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
    profileButton: {
        textTransform: 'none',
    }
}));

export default function Bar(props) {
    const classes = useStyles();
    const theme = useTheme();

    //const [open, setOpen] = React.useState(false);
    const profile = useSelector((state) => state.profile)

    // Props and handle for open Drawer
    const { open, setOpen } = props
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    //----------------------------------



    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };



    const handleDrawerClose = () => {
        setOpen(false);
    };

    const history = useHistory()
    const handleProfile1 = () => {
        console.log('profile')
        history.push(`/profile`)
    }

    const { onSubmit } = props
    // console.log(props.chats);
    // console.log(props.currentChat);

    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        }
    }

    return (

        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <ViewListIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    Simple chat
                </Typography>



                <Button className={classes.profileButton} color="inherit" size="large" onClick={() => handleProfile1()} endIcon={<AccountCircle />}>{profile.name}</Button>
                {/* <IconButton
                        edge="end"
                        // aria-label="account of current user"
                        // aria-controls={menuId}
                        // aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        onClick={handleProfile}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton> */}
            </Toolbar>
        </AppBar>

    );
}
