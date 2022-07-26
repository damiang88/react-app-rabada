import React, {useState} from 'react'
import "./ItemCountStyle.css"


export default function ItemCount({stock, initial, onAdd}) {
      const [count, setCount] = useState(initial); 

      //Handler para sumar el stock pedido
      function suma(){
        if(count < stock)
        {
            setCount(count + 1);
        };
      };
      //Handler para restar el stock pedido
      function resta(){
          if(count> initial){
            setCount(count-1);
          }
       };      
  
  return (

        <div>
            <button onClick={resta}
            type="button" className="btn btn-stepper btn-secondary btn-sm"
            disabled={count === initial ? true : null}>-</button>
            <span className="text-stepper">{count}</span>
            <button onClick={suma} 
            type="button" 
            disabled={count === stock ? true : null}
            className="btn btn-stepper btn-secondary btn-sm">+</button>
            <br/>             <br/>                       
            <button type="button" onClick={()=>onAdd(count)}
             disabled={stock === 0 ? true : null} className="btn btn-secondary btn-sm">
              Agregar al carrito
            </button>
        </div>

);
}
