import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';

//const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    input: {
        padding: theme.spacing(0, 1),
        // margin: theme.spacing(2, 2),

    },
    form: {
        display: 'flex',

    },
}));


const InputMessage = (props) => {
    const { onSubmit } = props
    const classes = useStyles();
    //  const theme = useTheme();

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


        <form className={classes.form} onSubmit={handleSubmit}>
            <Input
                disableUnderline
                fullWidth
                required
                autoFocus
                multiline
                className={classes.input}
                variant="outlined"
                label="Сообщение"
                placeholder="Введите сообщение"
                value={inputValue}
                onChange={handleChange}
            />
            <IconButton edge="end" aria-label="send" type="submit" >
                <SendIcon />
            </IconButton>
        </form>

    )
}

export default InputMessage