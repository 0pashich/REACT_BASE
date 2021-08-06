import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { toggleShowName } from '../../actions/profile'

export default function Profile(props) {
    const dispatch = useDispatch()
    const { age, name, showName } = useSelector((state) => state.profile)

    const setShowName = (event) => {
        dispatch(toggleShowName)
    }

    return (
        <div>
            <p>Profile page</p>
            <p>
                <b>Name: </b>
                {name}
            </p>
            <p>
                <b>Age: </b>
                {age}
            </p>

            {showName && <div>{name}</div>}

            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />

        </div>
    )
}