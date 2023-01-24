import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileOrderHistory from '../components/Profile/ProfileOrderHistory'
import ProfileActions from '../components/Profile/ProfileActions'
import withAuth from '../hoc/withAuth'
import { useUser } from '../context/UserContext'
import { useEffect } from 'react'
import {userById} from '../api/user'
import { storageSave } from '../utils/storage'
import { STORAGE_KEY_USER } from '../const/storageKey'



const Profile = () => {
  const {user, setUser} = useUser();
  
  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if(error === null){
        storageSave(STORAGE_KEY_USER, latestUser)
        setUser(latestUser);
      }
    }
    //findUser();
  }, [setUser, user.id])
  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader username={user.username}></ProfileHeader>
      <ProfileActions></ProfileActions>
      <ProfileOrderHistory orders={user.orders}></ProfileOrderHistory>
    </>
  )
}

export default withAuth(Profile) 