import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';

function App() {


  return (
    <CartProvider>
    <Header/>
    <ProductList/>
    </CartProvider>
  )
}

export default App
