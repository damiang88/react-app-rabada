import React, { useState, useEffect } from "react";
import ItemList from "../itemlist/ItemList";
import {useParams} from 'react-router-dom'
import { traerProductos } from "../firebase/Config";
import RotateLoader from 'react-spinners/RotateLoader'

function ItemListContainer(props) {
  const [products, setProduct] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  //Llamada para recuperar todos los productos desde Firebase
  useEffect( ()=> {
                      traerProductos(categoryId) //Se pasa la categoría
                                                //(el metodo receptor revisa si esta vacía o no)
                      .then((res)=> {
                                      setProduct(res);
                                    })
                                    .finally(() => {
                                      setIsLoading(false);
                                    });
                  },[categoryId]);

  if(isLoading){
  return (
  <div className="mx-auto container h-96 flex justify-around">
    <div className="flex-1 flex justify-center items-center">
        <RotateLoader className="mx-auto align-middle" color={"rgb(000, 000, 000)"} size={20} />
    </div>
  </div>
  )
  }                  

  return (
    <div className="container">
          <p>{props.greeting}</p>
          <ItemList lista={products}/>
    </div>
  );
}

export default ItemListContainer;
