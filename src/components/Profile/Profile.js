import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { toggleShowName } from '../../actions/profile'
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import InputCust from '../Input/Input'
import { changeName } from '../../actions/profile'
import Input from '@material-ui/core/Input';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

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
    paper: {
        padding: theme.spacing(2, 2),
        // margin: theme.spacing(2, 2),

    },

}));

//const open = true;

export default function Profile(props) {
    const classes = useStyles();
   // const theme = useTheme();
    const ui = useSelector((state) => state.ui)


    const { age, name, showName } = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const setShowName = (event) => {
        dispatch(toggleShowName)
    }

    //const { age = 0, name = 'Unknown', onChangeProfileName } = props

    const [inputNameValue, setInputNameValue] = React.useState(name)

    const handleNameChange = (e) => {
        setInputNameValue(e.target.value)
    }

    const handleNameSubmitForm = (e) => {
        e.preventDefault()


        dispatch(changeName(inputNameValue))
        // setInputNameValue(name)

    }

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
            <Paper className={classes.paper}>
                <Typography variant="h4" component="h4">
                    Profile page
                </Typography>

                <p className={classes.root}>
                    <b className={classes.paper}>Name: </b>
                    {/* {name} */}
                    <form
                        className={classes.root}
                        //{clsx(classes.form, { [classes.hide]: openInput, } )}
                        //{clsx(classes.form, openInput && classes.hide)}
                        noValidate autoComplete="off"
                        onSubmit={handleNameSubmitForm}
                    >
                        <Input
                            disableUnderline
                            fullWidth
                            required
                            //inputRef={inputRef}
                            // className="child__text-field bordered"
                            variant="outlined"
                            label="User name"
                            placeholder={name}
                            value={inputNameValue}
                            onChange={handleNameChange}
                        // onSubmit={handleAddChat}




                        />

                        {/* <TextField id="outlined-basic" label="New chat" variant="outlined" size='small' fullWidth required /> */}
                        {/* value={name} onChange={handleChange} */}
                        <IconButton edge="end" aria-label="delete" size='small' type="submit">
                            <DoneIcon />
                        </IconButton>
                    </form>
                </p>
                <p>
                    <b className={classes.paper}>Age: </b>
                    {age}
                </p>

                {/* <InputCust
                    label="Имя"
                    placeholder="Введите новое имя"
                    onSubmit={handleNameSubmit}
                />
 */}



                <p className={classes.paper}>
                    {/* {showName && <div>{name}</div>} */}

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showName}

                                onChange={setShowName}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<p>Show user name:    {showName && name}</p>}
                    />
                </p>
            </ Paper>
        </main>
    )
}