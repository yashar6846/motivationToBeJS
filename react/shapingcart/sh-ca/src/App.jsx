import { useState } from 'react';
import Cart from './components/Cart/Cart';
import { FetchData } from './components/Cart/FetchData';
import Header from './components/Layout/Header';
import { MealsSummary } from './components/Meals/MealsSummary';
import CartProvider from './components/store/CartProvide';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
   
     <>
    {cartIsShown && < Cart onClose={showCartHandler}/>}
     <Header onSHowCart={hideCartHandler}/>
     <main>
      <MealsSummary />
     </main>
     <FetchData />
     </>
     
  );
}

export default App;
