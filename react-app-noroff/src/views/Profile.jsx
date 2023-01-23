import React from 'react'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileOrderHistory from '../components/Profile/ProfileOrderHistory'
import ProfileActions from '../components/Profile/ProfileActions'
import withAuth from '../hoc/withAuth'
import { useUser } from '../context/UserContext'


const Profile = () => {
  const {user} = useUser();
  
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