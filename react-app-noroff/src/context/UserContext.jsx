import React from 'react'
import { useContext } from 'react';
import { createContext, useState } from 'react'
import { STORAGE_KEY_USER } from '../const/storageKey';
import { storageRead } from '../utils/storage';


const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({children}) => {
    const [ user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    const state = {
        user,
        setUser
    }

    return(
        <UserContext.Provider value={ state }>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider