import React from 'react'

export const Checkout = () => {
  return (
    <form>
     <div className=''>
     <label htmlFor='name'>Name</label>
     <input type="text" id='name'/>
     </div>
     <div className=''>
     <label htmlFor='name'>Street</label>
     <input type="text" id='street'/>
     </div>
     <div className=''>
     <label htmlFor='postal'>Name</label>
     <input type="text" id='postal'/>
     </div>
    </form>
  )
}
