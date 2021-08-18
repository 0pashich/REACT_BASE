import React from 'react'
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { useHistory } from 'react-router'
//import { useDispatch, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeName } from '../../actions/profile'

export default function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isSigningUp, setIsSigningUp] = React.useState(false)

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)
    const history = useHistory()
    //    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()


    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            await dispatch(changeName(firebase.auth().currentUser.providerData[0].email))
            history.push(`/profile`)
        }
        catch (error) { setError(error.message) }
    }

    const handleSignUp = async () => {
        try { await firebase.auth().createUserWithEmailAndPassword(email, password) }
        catch (error) { setError(error.message) }
    }

    const handleSubmit = () => {
        //  console.log('Пытемся залогиниться', { email, password })

        // firebase.auth().onAuthStateChanged((user) => {
        //     console.log('onAuthStateChange', { user })
        // })
        if (!email || !password) { setError('Заполните поля'); return }
        if (isSigningUp) { handleSignUp(); return }
        handleLogin()
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <p>{isSigningUp ? 'Sign up' : 'Login'}</p>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSigningUp}
                        onChange={handleIsSigningUpChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Еще нет учетной записи?</p>}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Password"
                value={password}
                type="password"
                autoComplete="current-password"
                onChange={handleChangePassword}
            />

            <button onClick={handleSubmit}>
                {isSigningUp ? 'Sign up' : 'Login'}
            </button>

            <hr />
            <p>{error}</p>
        </div>
    )
}
