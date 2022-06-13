import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer(props) {
  return (
<div className="container">
  <div className="row">
    <div className="column col-sm">
      <p>{props.greeting}</p>
      <img src="https://picsum.photos/200" alt="Greeting Imagen"></img>
      <ItemCount stock={10} initial={1} />
    </div> 

  </div>    
</div>  )
}

export default ItemListContainer