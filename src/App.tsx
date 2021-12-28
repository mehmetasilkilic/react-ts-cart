import "./assets/scss/main.scss"
import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { LinearProgress } from "@mui/material";
import Item from "./components/item/Item"

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();


const App = () => {

  const { data, isLoading, error } = useQuery<CartItemType[]>("product", getProducts);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div className="error">Something went wrong</div>


  return (
    <div className="App">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;