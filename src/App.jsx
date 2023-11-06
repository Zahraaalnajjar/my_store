import React, {useState} from 'react'
import data from "./component/back/data/data";
import Header from './component/front/Header/Header';
import RoutesComponents from './component/front/Header/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Sign from './component/front/Header/Signup/Sign';
import Card from './component/front/Header/Card/Card';
const App = () => {
  const { productItem } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item )
      );
    }
      else{
        setCartItems([...cartItems, {...product, quantity: 1 }])
      
  }
}
const handleRemoveProduct = (product) =>{
  const ProductExist = cartItems.find((item) => item.id === product.id);
if(ProductExist.quantity === 1){
  setCartItems(cartItems.filter((item) => item.id !== product.id));
}
else{
  setCartItems(
    cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
  );
}
};
const handleCartCleaner = () =>{
  setCartItems([]);
}

  return <div>
    <Router>
    <Header cartItems={cartItems}/>
    <RoutesComponents productItem={productItem} cartItems={cartItems} handleAddProduct={handleAddProduct}
    handleRemoveProduct = {handleRemoveProduct}
    handleCartCleaner = {handleCartCleaner}/>
    <Card/>
    </Router>
    </div>;
};
    
export default App;
