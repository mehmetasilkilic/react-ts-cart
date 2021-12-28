import "./assets/scss/main.scss"
import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';



const getProducts = async () => {
  await (await fetch("https://fakestoreapi.com/products")).json();
}

const App = () => {
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;