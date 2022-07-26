import React, {useState,useContext} from 'react'
import { createBuyOrder } from '../firebase/Config';
import { CartContext } from '../../context/CartContext';
import './CartForm.css'

function CartForm() {
  const { cart, clearCart, totalPriceCart } = useContext(CartContext);   
  let total = 0
  const [buyer, setBuyer] = useState(  { name: "",
                                          phone: "",
                                          email: "",
                                        },
                                      )


                                      
  const handleChange = (evt) => {
    
    const field = evt.target.name;
    const value = evt.target.value;

    setBuyer({
      ...buyer, 
      [field]: value,
    })
  }

  function handleBuyOrder(evt) {
    evt.preventDefault();
    const dataOrder = {
      buyer,
      items: cart,
      total: totalPriceCart(),
    };

    createBuyOrder(dataOrder).then(( orderDataCreated ) => {
      clearCart();
      console.log(orderDataCreated.id)
    });

  }  


  return (
      <div>
      <h1>Resumen</h1>      
      <div>
      <ul className="list-group mx-auto justify-content-center"  style={{maxWidth: '45rem'}}>
       <li className="list-group-item" key="1" >
          {cart.map((item) => (
              <div key={item.id}>
              <p>
                  {item.title} X{item.cantidad} - ${item.price * item.cantidad}
              </p>
            </div>
          ))}
          <p>
            {cart.forEach(item => total += (item.price * item.cantidad))}
            <span>Total:</span> ${total}
          </p>
          </li>
        </ul>
        </div>
      
      <br />
      <h2>Datos del envio</h2>

    <form>
    <div className="row formRow">
      <div className="col-4">
      <label htmlFor="username" className='formLabel'>Usuario</label>
      <input onChange={handleChange} className='form-control' name="name"></input>
    </div>
      
    <div className="col-4">

    <label htmlFor="phone" className='formLabel'>Telefono</label>
      <input onChange={handleChange} className='form-control' name="phone"></input>

    </div>

    <div className="col-4">
      <label htmlFor="email" className='formLabel'>Email</label>
      <input onChange={handleChange} className='form-control' name="email"></input>
    </div>

    </div>
    <button onClick={handleBuyOrder} className="btn btn-success btn-lg formButton" >Finalizar Compra</button>

    </form>

    </div>


  )
}

export default CartForm