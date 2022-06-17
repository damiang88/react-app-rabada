import React,{useState, useEffect} from 'react'
import { productos } from "../data/products";
import ItemDetail from '../itemdetail/ItemDetail';

export default function ItemDetailContainer(props) {

    const [product, setProduct]= useState({});

    useEffect( ()=> {
  
      const traerProducto= new Promise ((res, rej)=>{
          setTimeout(()=> {
            res(productos[0])
          },2000);      
      })
      traerProducto
      .then((res)=>{
      
       setProduct(res);
      })
  
    },[]);
  
  
  return (
    <div>ItemDetailContainer
        <div className="container">     
            <p>{props.greeting}</p>  
            <ItemDetail item={product}/>
            
        </div>

    </div>
    
  )
}
