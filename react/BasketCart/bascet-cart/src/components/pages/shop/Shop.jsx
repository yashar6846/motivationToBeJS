import { FatchData } from '../../FatchData'
import { Product } from './Product'

import './shop.css'
import { Data } from '../../../data/DATA'
export const Shop = (props) => {
    const{countres}=FatchData()
  return (
    <>
    <div className='shop'>
        <div className='shopTitle'>
            <h2>Shop</h2>
            </div>
     <div className='products'>
        {countres.map((produc)=>(
           <Product data={produc}/> 
        ))}
     </div>
    </div>
    </>
  )
}
