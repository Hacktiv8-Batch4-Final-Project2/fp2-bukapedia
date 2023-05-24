import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/reducers/Products'

const CartItem = ({item}) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log(e);
    const newItem = {
      ...item,
      quantity: parseInt(e)
    }
    dispatch(addToCart(newItem))
  }

  return (
    <div className='flex' key={item.id}>
      <img src={item.image} alt={item.title} className='h-[100px]' />
      <p>{item.title}</p>
      <input type="number" placeholder={item.quantity} onChange={(e) => {
        handleChange(e.target.value)
      }}/>
    </div>
  )
}

export default CartItem