import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from'react-router-dom';
import { createBuyOrder } from '../firebase/Config';

export default function Cart() {
  const { cart, removeItem, clearCart, totalPriceCart } = useContext(CartContext);   
  let subtotal = 0

  function handleBuyOrder(evt) {
    evt.preventDefault();
    const dataOrder = {
      buyer:{
        name:"User Prueba",
        phone: 1123121,
        email:"UserPrueba@gmail.com"
    },
      items: cart,
      total: totalPriceCart(),
    };

    createBuyOrder(dataOrder).then(( orderDataCreated ) => {
      clearCart();
      console.log(orderDataCreated.id)
    });

  }

  function handleClear(){
    clearCart()
  }


  return (
        
    <div>
    <div>

    {(cart.length === 0)  ? ( 
       <div>
          <h3>Su carrito está vacío</h3>
          <Link to={"/"} ><button >Volver</button></Link>
          
       </div> ) 

    :  ( <div>
          <ul className="list-group mx-auto justify-content-center"  style={{maxWidth: '50rem'}}>
              {cart.map((item) =>(
              <li className="list-group-item" key={item.id}>
                <img alt="Articulo" src={item.imageId} style={{maxWidth: "5rem", maxHeight:"5rem", alignContent:"center"}}/>
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
              <button onClick={handleBuyOrder}>Finalizar Compra</button>
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
