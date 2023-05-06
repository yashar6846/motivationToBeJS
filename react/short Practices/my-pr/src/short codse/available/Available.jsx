import { Product } from './Product'
import { Cart } from './Cart'
import { CartProvider } from './shard/Contex'
import { FatchData } from './fetchData'

export const Available = () => {
  const{countres}=FatchData()
  return (
    <CartProvider>
    <div>
    <Cart />
    {
       countres.map((item)=> {
        return <Product 
         key={item.id}
         name={item.name}
         price={item.price}
        />
       }) 
    }
    </div>
    </CartProvider>
  )
}
