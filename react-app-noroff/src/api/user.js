const apiUrl = process.env.REACT_APP_API_URL;
export const checkForUser = async (username) => {
    try{
        const response = await fetch(`${apiUrl}?username=${username}`);
        if(!response.ok){
            throw new Error("Could't complete request")
        }
        const data = await response.json()
        return [ null, data]
    } 
    catch (error) {
        return [ error.message , []]
    }
}

export const createUser = async (username) => {
    try{
        const response = await fetch(`apiUrl`);
        if(!response.ok){
            throw new Error("Could't crate tghe suer")
        }
        const data = await response.json()
        return [ null, data]
    } 
    catch (error) {
        return [ error.message , []]
    }
}

export const loginUser = async (username) => {
    const [ error, user ] = await checkForUser(username);
    if(user.length > 0){
        return [ null, user.pop() ]
    }
    
    const [createError, newUser] =  createUser(username);
}