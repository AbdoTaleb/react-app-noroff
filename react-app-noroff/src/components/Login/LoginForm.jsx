import React from 'react'
import { useForm } from 'react-hook-form'

const usernameConfig = {
    required: true,
    minLength: 3
}
function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        
    }


    console.log(errors)


    const errorMessage = (() => {
        if(!errors.username){
            return null
        }

        if(errors.username.type === 'required'){
            return <span>Username is requiered</span>
        }
        if(errors.username.type === 'minLength'){
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
                        { errorMessage }
                </fieldset>
                <button typeof='submit'>Continue</button>

            </form>
        </>
    )
}

export default LoginForm