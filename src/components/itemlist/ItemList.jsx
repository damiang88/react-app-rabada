import React from 'react'
import Item from '../item/Item'

export default function ItemList({lista}) {

    //Recibe Items y los mapea a <Item/>

//    <Item item={props.Item}/>
  
  return (
    <div>ItemList
      <br></br>
        {lista.map((lista)=>(
        <Item key={lista.id} item={lista} />
        ))}
    </div>
    
  )
}
