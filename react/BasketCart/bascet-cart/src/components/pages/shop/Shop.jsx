import { FatchData } from '../../FatchData'
import { Product } from './Product'

import './shop.css'
// import { Data } from '../../../data/DATA'
export const Shop = (props) => {
    const{countres}=FatchData()
    // console.log(countres);
  return (
    <>
    <div className='shop'>
        <div className='shopTitle'>
            <h2>Shop</h2>
            </div>
     <div className='products'>
        {countres.map((produc)=>(
           <Product key={produc.id} data={produc}/> 
        ))}
     </div>
    </div>
    </>
  )
}
