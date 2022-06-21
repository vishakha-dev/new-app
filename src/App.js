import React from 'react';
import './App.css';

// import InputHandler from './InputHandler';
// import LoginHandler from './LoginHandler';
import ProductList from './products/ProductsList';
import OrdersTab from './products/OrdersTab';
import MenuTabs from './products/MenuTabs';
import ProductDetails from './products/ProductDetails';
import { Routes, Route } from 'react-router-dom';
function App() {
  // const [count,setCount]=useState(0)
  // const plus=(v)=>{setCount(count+1)}
  // const minus=(v)=>{setCount(count-1)}
  return (
    <div className="container">
      {/* <h1 className="app-h1">count : {count+1} -  {count}</h1>
      <button onClick={()=>plus("abc")}>+</button>
      <button onClick={()=>minus("xyz")}>-</button>
      <InputHandler/>
      <LoginHandler/>
      <NewComponent/> */}
      <MenuTabs />

      <div className="tab-content ">
        <div className="tab-pane active" id="1">
          <Routes>
            <Route exact path='' element={<ProductList />} />
            <Route exact path='orders' element={<OrdersTab />} />
            <Route exact path='product/:sl' element={<ProductDetails/>} />
          </Routes>
          
          
        </div>
      </div>
    </div>

  );
}

export default App;
