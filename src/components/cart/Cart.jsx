import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from'react-router-dom';

export default function Cart() {
  const { cart, removeItem, clearCart } = useContext(CartContext);   
  let subtotal = 0

  //Handler para boton de vaciar el carrito
   function handleClear(){
    clearCart()
  }

  return (
    <div>
    {(cart.length === 0)  ? ( 
       <div>
          <h3>Su carrito está vacío</h3>
                    
       </div> ) 

    :  ( <div>
      <br />
          <ul className="list-group mx-auto justify-content-center"  style={{maxWidth: '60rem'}}>
              {cart.map((item) =>(
              <li className="list-group-item" key={item.id} >
                <img alt="Articulo" src={item.pictureUrl} style={{maxWidth: "5rem", maxHeight:"5rem", alignContent:"center"}}/>
                <b> Producto: </b> {item.title}
                <b> Cant: </b> {item.cantidad}
                <b> Precio: </b> $ {item.price}
                <b> Subtotal: </b> $ {(item.cantidad * item.price)}
                <b>  </b>
                <button className="btn btn-secondary border btn-sm"
                 onClick={()=>removeItem(item.id)} > Quitar </button>
                
              </li>
                ))}
          </ul>
          <br/> <br/>
              <button className="btn btn-secondary border btn-md" 
              onClick={handleClear}>Vaciar Carrito</button>
              <br/> <br/>
               {cart.forEach(item => subtotal += (item.price * item.cantidad))}
              <h3>Total: ${subtotal} </h3>          
              <Link 
              className="btn btn-success border btn-lg"  to={"/cartForm"}>
                Checkout
              </Link>
    </div> )}  
  </div>
  )
}
