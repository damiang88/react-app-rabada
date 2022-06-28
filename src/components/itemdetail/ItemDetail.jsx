import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../itemcount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({item}) {

  const [ cant, setAddedToCart] = useState(0);

  function handleOnAdd(cantidad){
       console.log( cantidad)
    
        setAddedToCart(cantidad);

      }


  return (  

    <div>Detalle
        <br/>

        <div className="card cardList" style={{width: '80rem', height:'30rem'}}> 
            <div className="card-body">
            <div className='row'>
                <div className="col">
                <img alt="Articulo" src={item.pictureUrl} style={{maxWidth: "20rem", maxHeight:"20rem", alignContent:"center"}}/>

                </div>
                <div className="col">
                <h4 className="card-title text-dark">{item.title}</h4>
                <p className="card-title text-dark">{item.description}</p>
                <p className="card-text text-dark"> ${item.price} </p>
                <br/>
                {cant === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}                    
                </div>

            </div>

            </div>
        </div>

    </div>
    
  )
}
