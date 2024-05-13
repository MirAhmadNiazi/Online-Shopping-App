import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"
import Login from "./components/Login"
import WishList from "./components/WishList"
import Basket from "./components/Basket";
import Adidas from "./components/Adidas";
import Clarks from "./components/Clarks";
import Ecco from "./components/Ecco"
import Nike from "./components/Nike"
import Puma from "./components/Puma"
import Products from "./components/Products";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Adidas" element={<Adidas />} />
          <Route path="/Clarks" element={<Clarks />} />
          <Route path="/Ecco" element={<Ecco />} />
          <Route path="/Nike" element={<Nike />} />
          <Route path="/Puma" element={<Puma />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Products" element={<Products  />} /> 
        </Route>
      </Routes>

    
     

    
    </>
  );
}

export default App;