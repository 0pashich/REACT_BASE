import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Input = (props) => {
    const { onSubmit } = props

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
        <form className="app__form bordered" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                autoFocus
                className="child__text-field bordered"
                variant="outlined"
                label="Сообщение"
                placeholder="Введите сообщение"
                value={inputValue}
                onChange={handleChange}
            />
            <Button type="submit" variant="outlined">
                Отправить
            </Button>
        </form>
    )
}

export default Input