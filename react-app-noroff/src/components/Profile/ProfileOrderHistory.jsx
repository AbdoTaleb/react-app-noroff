import React from 'react'
import ProfileOrderHistoryItem from './ProfileOrderHistoryItem'

function ProfileOrderHistory({orders}) {
    const orderList = orders.map((order, index) => 
    <ProfileOrderHistoryItem key={index + "-" + order} order={order}/>)
  return (
    <section>
        <h1>Your order history</h1>
        <ul>
            {orderList}
        </ul>
    </section>
  )
}

export default ProfileOrderHistory