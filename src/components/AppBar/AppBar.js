import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ViewListIcon from '@material-ui/icons/ViewList';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { setDrawerOpen } from '../../actions/ui'
import BallotIcon from '@material-ui/icons/Ballot';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
//import Link from '@material-ui/core/Link';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { changeIsAuthed } from '../../actions/profile'



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
    profileButton: {
        textTransform: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Bar(props) {
    const classes = useStyles();
    //const theme = useTheme();

    const profile = useSelector((state) => state.profile)
    const ui = useSelector((state) => state.ui)
    const dispatch = useDispatch()
    console.log('profile', profile)

    const handleDrawerOpen = () => {
        dispatch(setDrawerOpen(true));
        console.log('dispatch', ui)
    };

    const history = useHistory()
    const handleGoToProfile = () => {
        // history.push(`/login`)
        history.push(`/profile`)
    }

    const handleGoToNews = () => {
        history.push(`/news`)
    }


    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })
            dispatch(changeIsAuthed(Boolean(user)))

            // const currentUser = firebase.auth().currentUser.providerData.;

            //currentUser.providerData.forEach((userInfo) => {
            // console.log('User info for provider: ', firebase.auth().currentUser.providerData);

        })
    }, [])

    const handleSignOut = (e) => {
        e.preventDefault()

        firebase.auth().signOut()
    }


    return (

        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: ui.drawerOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, ui.drawerOpen && classes.hide)}
                >
                    <ViewListIcon />
                </IconButton>

                {/* <Link to="/signup" color='textPrimary'>Registration</Link>


                <Link to="/login">Login</Link>
               */}



                <Typography variant="h6" noWrap className={classes.title}>
                    Simple chat :: {ui.currentChat.name}
                </Typography>
                <Button className={classes.profileButton} color="inherit" size="large" onClick={() => handleGoToProfile()} endIcon={<AccountCircle />}>
                    {profile.isAuthed ? profile.name : "Login"}

                </Button>
                <IconButton
                    color="inherit"
                    aria-label="news"
                    onClick={handleGoToNews}
                    edge="end"
                //  className={clsx(classes.menuButton, ui.drawerOpen && classes.hide)}
                >
                    <InfoIcon />
                </IconButton>

                {profile.isAuthed ?
                    <IconButton
                        color="inherit"
                        aria-label="news"
                        onClick={handleSignOut}
                        edge="end"
                    //  className={clsx(classes.menuButton, ui.drawerOpen && classes.hide)}
                    >
                        <ExitToAppIcon />
                    </IconButton>
                    : null}


            </Toolbar>
        </AppBar>

    );
}
