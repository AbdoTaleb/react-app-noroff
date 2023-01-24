import React from 'react'
import { useState } from 'react'
import { OrderAdd } from '../api/order'
import OrderForm from '../components/Orders/OrderForm'
import OrdersCoffeeButton from '../components/Orders/OrdersCoffeeButton'
import { STORAGE_KEY_USER } from '../const/storageKey'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import { storageSave } from '../utils/storage'


const COFFEES = [
  {
    id: 1,
    name: 'Americamo',
    image: "img/americano.png"
  },
  {
    id: 2,
    name: 'Cappuccino',
    image: "img/cappuccino.png"
  },
  {
    id: 3,
    name: 'Latte',
    image: "img/latte.png"
  },
  {
    id: 4,
    name: 'Espresso',
    image: "img/espresso.png"
  }
]



function Orders() {
  const [coffee, setCoffe] = useState(null);
  const {user, setUser} = useUser();

  const handleCoffeeClicked = (coffeeId) => {
  
    const selectedCoffee = COFFEES.find(coffee => coffee.id === coffeeId)
    setCoffe(selectedCoffee)
  }

  const handleOrderClick = async (notes) => {
    console.log(notes)
    if(!coffee){
      alert('pleasde slecte a coffee first')
      return;
    }

    const order = (coffee.name + ' ' + notes).trim();
    console.log(order);
    const [error, updatedUser] = await OrderAdd(user, order);
    
    if(error !== null){
      return
    }

    // keep UI state and Server state in sync
    storageSave(STORAGE_KEY_USER, updatedUser)
    // update context state 
    setUser(updatedUser);


    console.log('error ' + error);
    console.log("result " + updatedUser);

  }

  const availableCoffees = COFFEES.map(coffee => {
    return <OrdersCoffeeButton key={coffee.id} 
    coffee={coffee}
    onSelect={handleCoffeeClicked}
    ></OrdersCoffeeButton>
  })
  return (
    <>
      <h1>Orders</h1>
      <section id='coffee-options'>
        {availableCoffees}
       
      </section>
      <section id='order-notes'>
        <OrderForm onOrder={handleOrderClick}></OrderForm>

      </section>
      <h4>Summery: </h4>
      {coffee && <p> Selected coffee: {coffee.name}</p>}
    </>
  )
}

export default withAuth(Orders) 