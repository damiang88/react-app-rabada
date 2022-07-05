import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from'react-router-dom';

export default function Cart() {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  let subtotal = 0
  function logCart(){
    console.log(cart)
  }

  function handleClear(){
    clearCart()
  }
  return (
        
    <div>
    <div>

    {(cart.length === 0)  ? ( 
       <div>
       <h3>No hay nada en el carrito</h3>
       <Link to={"/"} ><button >Volver</button></Link>

       </div> ) 

    : ( <div>
          <ul className="list-group mx-auto justify-content-center"  style={{maxWidth: '50rem'}}>
              {cart.map((item) =>(
              <li className="list-group-item" key={item.id}>
                <img alt="Articulo" src={item.pictureUrl} style={{maxWidth: "5rem", maxHeight:"5rem", alignContent:"center"}}/>
                <b> Producto: </b> {item.title}
                <b> Cantidad: </b> {item.cantidad}
                <b> Precio: </b> $ {item.price}
                <b> Subtotal: </b> $ {(item.cantidad * item.price)}
                <div  className="ml-4"> 
                <button onClick={()=>removeItem(item.id)}> Eliminar </button>
                </div>
              </li>
                ))}
          </ul>
          <br/> <br/>
              <button onClick={logCart}>Finalizar Compra</button>
              <br/> <br/>
              <button onClick={handleClear}>Vaciar Carrito</button>
              <br/> <br/>
              {cart.forEach(item => subtotal += (item.price * item.cantidad))}
              <h3>Total: ${subtotal} </h3>
      
       </div> )}  


    </div>

</div>

  )
}
