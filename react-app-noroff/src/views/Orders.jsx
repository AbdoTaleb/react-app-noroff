import React from 'react'
import OrdersCoffeeButton from '../components/Orders/OrdersCoffeeButton'
import withAuth from '../hoc/withAuth'

function Orders() {
  return (
    <>
    <h1>Orders</h1>
    <section id='coffee-options'>
      <OrdersCoffeeButton name='Americamo' imgage="img/americano.png"></OrdersCoffeeButton>

    </section>
    </>
  )
}

export default withAuth(Orders) 