import React from 'react'
import ItemCount from '../itemcount/ItemCount'
import './ItemDetail.css'

export default function ItemDetail({item}) {

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
                <p className="card-text text-dark"> ${item.price}</p>
                <br/>
                <ItemCount stock={item.stock} initial={0} />
                    
                </div>

            </div>

            </div>
        </div>

    </div>
    
  )
}
