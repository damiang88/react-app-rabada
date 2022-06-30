import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  function logCart(){
    console.log(cart)
  }

  function handleClear(){
    clearCart()
  }

  return (
        <div>
            <div>
                <br/>
                <button onClick={logCart}>Ver Log</button>
                <br/> <br/>
                <button onClick={handleClear}>Vaciar Carrito</button>
            </div>
        </div>
  )
}
