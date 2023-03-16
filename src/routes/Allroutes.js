import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import ProductDiscription from '../components/productDiscription'
import ProductList from '../components/productList'

export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDiscription/>}/>
      </Routes>

    </div>
  )
}
