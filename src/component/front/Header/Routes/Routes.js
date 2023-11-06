import React from 'react'
import Products from '../Products/Products'
import Signup from '../Signup/Sign';
import Card from '../Card/Card';
import { Route,Routes } from 'react-router-dom'
const RoutesComponents = ({productItem, cartItems, handleAddProduct, handleRemoveProduct, handleCartCleaner}) => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element={<Products productItem={productItem} handleAddProduct={handleAddProduct}/>}>
            </Route>
            <Route path='/signup'element={<Signup/>}>
            </Route>
            <Route path='/cart' element={<Card cartItems={cartItems} handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartCleaner={handleCartCleaner}/>}>
        </Route>
        </Routes>
        
    </div>
  )
}

export default RoutesComponents