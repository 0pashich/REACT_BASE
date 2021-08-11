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

    const handleDrawerOpen = () => {
        dispatch(setDrawerOpen(true));
        console.log('dispatch', ui)
    };

    const history = useHistory()
    const handleGoToProfile = () => {
        history.push(`/profile`)
    }

    const handleGoToNews = () => {
        history.push(`/news`)
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
                <IconButton
                    color="inherit"
                    aria-label="news"
                    onClick={handleGoToNews}
                    edge="start"
                //  className={clsx(classes.menuButton, ui.drawerOpen && classes.hide)}
                >
                    <BallotIcon />
                </IconButton>


                <Typography variant="h6" noWrap className={classes.title}>
                    Simple chat :: {ui.currentChat.name}
                </Typography>
                <Button className={classes.profileButton} color="inherit" size="large" onClick={() => handleGoToProfile()} endIcon={<AccountCircle />}>{profile.name}</Button>
            </Toolbar>
        </AppBar>

    );
}
