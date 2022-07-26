import React,{useState, useEffect} from 'react'
import ItemDetail from '../itemdetail/ItemDetail';
import {useParams} from 'react-router-dom'
import { traerUnProducto } from '../firebase/Config';
import RotateLoader from 'react-spinners/RotateLoader'

export default function ItemDetailContainer(props) {

    const [product, setProduct]= useState(0);
    const [isLoading, setIsLoading] = useState(true);
    let {id} = useParams()

    //Llamada para recuperar los datos del producto en la ruta de la pagina
    useEffect( ()=> {

      traerUnProducto(id)
      .then((res)=> {
                      setProduct(res);
                    })
                    .finally(() => {
                      setIsLoading(false);
                    });
  },[id]);      
  
  //Mostrar el spinning
  if(isLoading){
    return (
    <div className="mx-auto container h-96 flex justify-around">
      <div className="flex-1 flex justify-center items-center align-middle">
      <RotateLoader className="mx-auto align-middle" color={"rgb(000, 000, 000)"} size={20} />
      </div>
    </div>
    )
  }


  return (
    <div>
        <div className="container">     
            <p>{props.greeting}</p>  
            <ItemDetail item={product}/>
            
        </div>

    </div>
    
  )
}
