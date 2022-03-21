import React, { useState } from 'react'
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import { ErrorModal } from '../UI/ErrorModal';
import classes from './AddUser.module.css'

export const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [error, setError] = useState()
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return
        };
        if (+enteredUserAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Age can not be less than 0'

            })
        };
        props.onAddUser(enteredUserName, enteredUserAge)
        setEnteredUserName('')
        setEnteredUserAge('')
    }

    const addUserName = (e) => {
        setEnteredUserName(e.target.value)
    }

    const addUserAge = (e) => {
        setEnteredUserAge(e.target.value)
    }

    const errorHandler = (e) => {
        setError(null)
    }

    return (
        <div>

            {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form className='form' onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        className='elements'
                        type="text"
                        id="username"
                        onChange={addUserName}
                        value={enteredUserName}>
                    </input>
                    <label htmlFor='age'>Age (years)</label>
                    <input
                        className='elements'
                        type="number"
                        id="age"
                        onChange={addUserAge}
                        value={enteredUserAge}>
                    </input>
                    <Button className='elements' type='submit'>Add User</Button>
                </form>
            </Card>
        </div>




    )
}
