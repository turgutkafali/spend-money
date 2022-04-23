import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import products from './products.json'
import Product from './components/product/Product'
import Basket from './components/basket/Basket';

function App() {
  const [money, setMoney] = useState(100000000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }
  

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))

  }, [basket])
  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map(product =>
        <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
      )}
      </div>
      {total > 0 && (
        <Basket resetBasket={resetBasket} total={total} products={products} basket={basket} /> 
      )}
      
      
    </>
  );
}

export default App;
