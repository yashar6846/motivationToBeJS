import React from 'react'
import './App.css'
import data from './data'
import { ProductList } from './copmonent/products/ProductList'
import { Hadear } from './copmonent/Hadear'

const App = () => {
  return (
    <>
    <ProductList  data={data.products}/>
    </>
  )
}

export default App