import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
    // the default vaulue when create context is only used for the components that are not wrapped by 
    // the provider component
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
