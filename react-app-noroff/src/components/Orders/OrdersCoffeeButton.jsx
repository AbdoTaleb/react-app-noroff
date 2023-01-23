import React from 'react'

function OrdersCoffeeButton({name, image}) {
  return (
    <button>
        <aside>
            <img src={image}   alt={name} with='55'></img>
        </aside>
        <section>
            <b>{name}</b>
        </section>

    </button>
  )
}

export default OrdersCoffeeButton