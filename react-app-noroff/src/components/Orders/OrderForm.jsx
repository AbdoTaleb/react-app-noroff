import React from 'react'
import {useForm} from 'react-hook-form'


function OrderForm({onOrder}) {
    const {register, handleSubmit} = useForm();

    const onSubmit = ({orderNotes}) => onOrder(orderNotes);
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
            <label htmlFor='order-notes'>Order notes</label>
            <input placeholder='No sugar ...' type='text' {...register('orderNotes')}></input>
        </fieldset>
        <button type='submit'>Order</button>
    </form>
  )
}

export default OrderForm