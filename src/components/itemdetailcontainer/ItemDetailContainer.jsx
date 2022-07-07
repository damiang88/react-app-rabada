import React,{useState, useEffect} from 'react'
import { productos } from "../data/products";
import ItemDetail from '../itemdetail/ItemDetail';
import {useParams} from 'react-router-dom'
import { traerUnProducto } from '../firebase/Config';

export default function ItemDetailContainer(props) {

    const [product, setProduct]= useState({});
    let {id} = useParams()
 
    useEffect( ()=> {

      traerUnProducto(id)
      .then((res)=> {
                      setProduct(res);
                    })
      .catch((error)=>{
                       console.log(error);
      },[id]);
  });      
      /*
      const traerProducto= new Promise ((res, rej)=>{
          setTimeout(()=> {
            res(productos.find(o => o.id === id)) //Por el momento se busca desde el array de productos 
          },200);      
      })
      traerProducto
      .then((res)=>{
      
       setProduct(res);
      })
  
    },[id]);*/
  
  
  return (
    <div>
        <div className="container">     
            <p>{props.greeting}</p>  
            <ItemDetail item={product}/>
            
        </div>

    </div>
    
  )
}
