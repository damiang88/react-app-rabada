import React from 'react'
import Item from '../item/Item'

  //Recibe Items y los mapea a <Item/>
export default function ItemList({lista}) {

  return (
    <div>Catalogo
      <br></br>
        {lista.map((lista)=>(
        <Item key={lista.id} item={lista} />
        ))}
    </div>
    
  )
}
