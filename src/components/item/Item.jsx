import React from 'react'
import './Item.css';
import ItemCount from "../itemcount/ItemCount";

export default function item({item}) {

    //{id, title, price, pictureUrl,stock}

    let mockPic = (item.pictureUrl + new Date().getTime())

  return (

        <div className="card cardList" style={{width: '18rem'}}> 
            <img  alt="Articulo"  src={mockPic}/>
            
            <div className="card-body">
                <h5 className="card-title text-dark">{item.title}</h5>
                <p className="card-text text-dark"> ${item.price}</p>
                <a href="." className="btn btn-light border">Ver Detalle</a>
                <br/>

                <ItemCount stock={item.stock} initial={0} />
            </div>
        </div>
    
  )
}
