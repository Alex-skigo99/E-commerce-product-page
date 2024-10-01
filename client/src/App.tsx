import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './common_components/Navbar'
import { useState, createContext, useEffect } from 'react'
import { CartContextType, CartItemType } from './types';

export const PRIMARY_COLOR = '#e86304';
export const SECONDARY_COLOR = '#838181';

const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
});
export const CartContext = createContext<CartContextType | undefined>(undefined);

const App = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    console.log('cart-', cart);
  }, [cart]);
  
  return (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
      </CartContext.Provider>
    </ThemeProvider>
  )
};

export default App;
