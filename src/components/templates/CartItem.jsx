import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className='flex'>
      <img src={item.image} alt={item.title} className='h-[100px]' />
      <p>{item.title}</p>
      <input type="number" placeholder={item.quantity} />
    </div>
  )
}

export default CartItem