import React from 'react'
import Products from '../Products/Products'
import Signup from '../Signup/Sign';
import { Route,Switch } from 'react-router-dom'
const Routes = ({productItem}) => {
  return (
    <div>
        <Switch>
            <Route path='/' exact>
                <Products productItem={productItem}/>
            </Route>
            <Route path='/signup' exact>
                <Signup/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes