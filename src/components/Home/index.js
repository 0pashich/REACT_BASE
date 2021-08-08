import React from 'react'
import {  useSelector } from 'react-redux'
//import FormControlLabel from '@material-ui/core/FormControlLabel'
//import Checkbox from '@material-ui/core/Checkbox'
//import { toggleShowName } from '../../actions/profile'
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import InputCust from '../Input/Input'
//import { changeName } from '../../actions/profile'
//import Input from '@material-ui/core/Input';
//import DoneIcon from '@material-ui/icons/Done';
//import IconButton from '@material-ui/core/IconButton';


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
    }
}));

//const open = true;

export default function Profile(props) {
    const classes = useStyles();
 //   const theme = useTheme();



    //const {  name } = useSelector((state) => state.profile)
    const ui = useSelector((state) => state.ui)
    //console.log(ui.drawerOpen)
    //const dispatch = useDispatch()
    // const setShowName = (event) => {
    //     dispatch(toggleShowName)
    // }

    //const { age = 0, name = 'Unknown', onChangeProfileName } = props

   // const [inputNameValue, setInputNameValue] = React.useState(name)

    // const handleNameChange = (e) => {
    //     setInputNameValue(e.target.value)
    // }

    // const handleNameSubmitForm = (e) => {
    //     e.preventDefault()


    //     dispatch(changeName(inputNameValue))
    //     // setInputNameValue(name)

    // }

    // const handleNameSubmit = (newName) => {
    //     // onChangeProfileName(newName)
    //     dispatch(changeName(newName))
    // }

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: ui.drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <Paper>
                <p>This is sinple chat app</p>

            </ Paper>
        </main>
    )
}