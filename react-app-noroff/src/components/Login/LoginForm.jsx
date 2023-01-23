import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage';
import {useNavigate} from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKey';

const usernameConfig = {
    required: true,
    minLength: 3
}


function LoginForm() {

    // Hooks 
    const {register, handleSubmit, formState: { errors } } = useForm();
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    // Loacal state
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError ] = useState(null);


    // side Effect
    useEffect(() => {
        if(user !== null){
            navigate('/profile')
        }
        console.log("User has changed  ", user)

    }, [ user, navigate ]) // Empty Deps - Only run 1ce


    // event handlers
    const onSubmit = async ({username}) => {
        setLoading(true);
        const [ error, userResponse] =  await loginUser(username)
        if(error !== null) {
            setApiError(error)
        }
        if(userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse);
            setUser(userResponse);
        }
        setLoading(false);

    }




    // Render Function 
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span>Username is requiered</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>Username is too short</span>
        }
    })()
    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor='username'> Username: </label>
                    <input type='text'
                        placeholder='Abdo'
                        {...register("username", usernameConfig)} />
                    {errorMessage}
                </fieldset>
                <button typeof='submit' disabled={loading}>Continue</button>
                { loading && <p>Logging in...</p>}
                { apiError && <p>{ apiError}</p>}

            </form>
        </>
    )
}

export default LoginForm