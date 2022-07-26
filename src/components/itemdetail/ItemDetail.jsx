import {React, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../itemcount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({item}) {

  const [ cant, setAddedToCart] = useState(0);
  const { addItem, removeItem } = useContext(CartContext);
  
//Llamar función para agregar el item al cart
  function handleOnAdd(cantidad){
    
        setAddedToCart(cantidad);
        addItem(item, cantidad);

      }
    
//Llamar función para quitar el item del cart
  function handleOnRem(){
            removeItem(item.id);
      }

  return (  

    <div>Detalle
        <br/>

        <div className="card cardList" style={{maxWidth: '80rem', maxHeight:'30rem'}}> 
            <div className="card-body">
            <div className='row'>
                <div className="col">
                <img alt="Articulo" src={item.pictureUrl} style={{maxWidth: "20rem", maxHeight:"20rem", alignContent:"center"}}/>

                </div>
                <div className="col">
                <h4 className="card-title text-dark">{item.title}</h4>
                <p className="card-title text-dark">{item.description}</p>
                <p className="card-title text-dark"> <b>Precio: </b> ${item.price} </p>
                <br/> 

                {cant === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                ) : (
                    <div>
                    <Link to="/cart">Ir al carrito</Link>
                    <br/><br/>
                    </div>
                )}                    
                    <br />
                   

                </div>

            </div>

            </div>
        </div>

    </div>
    
  )
}
