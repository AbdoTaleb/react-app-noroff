import React from 'react'

function OrdersCoffeeButton({coffee, onSelect}) {
  return (
    <button onClick={() => onSelect(coffee.id)}>
        <aside>
            <img src={coffee.image} alt={coffee.name} with='20' height="50"></img>
        </aside>
        <section>
            <b>{coffee.name}</b>
        </section>

    </button>
  )
}

export default OrdersCoffeeButton