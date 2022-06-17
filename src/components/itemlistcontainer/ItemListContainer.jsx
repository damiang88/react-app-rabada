import React, { useState, useEffect } from "react";
import { productos } from "../data/products";
import ItemList from "../itemlist/ItemList";

function ItemListContainer(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
                            setTimeout(() => {
                              res(productos);
                            }, 2000);
    });
    traerProductos
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });

    /*
    const traerProductos= new Promise ((res, rej)=>{ setTimeout(()=> {
      res((res)=> SetProduct(productos))
    },);
    })*/
  }, []);

  return (
    <div className="container">
          <p>{props.greeting}</p>
          <ItemList lista={products}/>
    </div>
  );
}

export default ItemListContainer;
