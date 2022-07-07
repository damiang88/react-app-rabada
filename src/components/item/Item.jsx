import React from 'react'
import './Item.css';
import {NavLink} from'react-router-dom';

export default function item({item}) {

 
  return (

        <div className="card cardList" style={{width: '18rem'}}> 
            <img  alt="Articulo"  src={item.imageId} />
            
            <div className="card-body">
                <h5 className="card-title text-dark">{item.title}</h5>
                <p className="card-text text-dark"> ${item.price}</p>
                <NavLink to={`/item/${item.id}`} className="btn btn-light border">Ver Detalle</NavLink>
                <br/>
            </div>
        </div>
    
  )
}
