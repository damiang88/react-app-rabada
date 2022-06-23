import React,{useState, useEffect} from 'react'
import { productos } from "../data/products";
import ItemDetail from '../itemdetail/ItemDetail';
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer(props) {

    const [product, setProduct]= useState({});
    let {id} = useParams()
 
    useEffect( ()=> {
      const traerProducto= new Promise ((res, rej)=>{
          setTimeout(()=> {
            res(productos.find(o => o.id === id)) //Por el momento se busca desde el array de productos 
          },2000);      
      })
      traerProducto
      .then((res)=>{
      
       setProduct(res);
      })
  
    },[id]);
  
  
  return (
    <div>
        <div className="container">     
            <p>{props.greeting}</p>  
            <ItemDetail item={product}/>
            
        </div>

    </div>
    
  )
}