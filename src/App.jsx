import React from 'react'
import data from "./component/back/data/data";
import Header from './component/front/Header/Header';
import Routes from './component/front/Header/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  const { productItem } = data;
  return <div>
    <Router>
    <Header/>
    <Routes productItem={productItem}/>
    </Router>
    </div>;
};
    
export default App;
