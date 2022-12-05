import React from 'react'
import Description from './component/Description';
import Product from "./component/Product"
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
    <div className="App">
       <Routes>
       <Route exact path="/" element={<Description/>} ></Route>
        <Route exact path=":products" element={<Product/>}></Route>
        </Routes>
    </div>
    </>
  );
}

export default App;
