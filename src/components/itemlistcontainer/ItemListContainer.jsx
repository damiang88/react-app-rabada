import React, { useState, useEffect } from "react";
import { productos } from "../data/products";
import ItemList from "../itemlist/ItemList";
import {useParams} from 'react-router-dom'


function ItemListContainer(props) {
  const [products, setProduct] = useState([]);
  let {id} = useParams()

  useEffect(() => {
  
    const traerProductos = new Promise((res, rej) => {
      if(id){ setTimeout(() => {
                              res(productos.filter(({category}) => category === id));
                            }, 2000);}
                            else{
                              setTimeout(() => {
                                res(productos);
                              }, 200);}
                             
    }); 
    traerProductos
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  return (
    <div className="container">
          <p>{props.greeting}</p>
          <ItemList lista={products}/>
    </div>
  );
}

export default ItemListContainer;
