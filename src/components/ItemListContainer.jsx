import React from 'react'


 function ItemListContainer(props) {
  return (
<div class="container">
  <div class="row">
    <div class="column col-sm">
      <p>{props.greeting}</p>
      <img src="https://picsum.photos/200" alt="Greeting Imagen"></img>   
    </div> 
    <div class="column col-sm">
      <p>{props.greeting}</p>
      <img src="https://picsum.photos/200" alt="Greeting Imagen"></img>   
    </div> 
    <div class="column col-sm">
      <p>{props.greeting}</p>
      <img src="https://picsum.photos/200" alt="Greeting Imagen"></img>   
    </div> 
  </div>    
</div>  )
}

export default ItemListContainer