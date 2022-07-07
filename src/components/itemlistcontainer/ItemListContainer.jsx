import React, { useState, useEffect } from "react";

//import { productos } from "../data/products";
import ItemList from "../itemlist/ItemList";
import {useParams} from 'react-router-dom'
import { traerProductos } from "../firebase/Config";


function ItemListContainer(props) {
  const [products, setProduct] = useState([]);
  const { categoryId } = useParams();


  useEffect( ()=> {
                      traerProductos(categoryId)
                      .then((res)=> {
                                      setProduct(res);
                                    })
                      .catch((error)=>{
                                       console.log(error);
                      },[categoryId]);
                  });

  /*
  useEffect( () => {

    /*
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");

        if (categoryId) {
          const queryFilter = query(
              queryCollection,
              where("categoryID", "==", categoryId )
          );

         const traerProductos = async () => { 
              await getDocs(queryFilter)
                .then((resp) => setProduct(
                      resp.docs.map((item) => ({ id: item.id, ...item.data() }))
                    )
                ).catch((err) => console.log(err)).finally(console.log("FINALLY"));
              }
        } else {
          const traerProductos = async () => { 

          await getDocs(queryCollection)
              .then((resp) => setProduct(
                    resp.docs.map((item) => ({ id: item.id, ...item.data() }))
                )
              ).catch((err) => console.log(err)).finally(console.log("FINALLY x2"));
        }
      }
        
    }, [categoryId]);
    */

    /*const traerProductos = new Promise((res, rej) => {
      if(categoryId){ setTimeout(() => {
                              res(products.filter(({category}) => category === categoryId));
                            }, 2000);}
                            else{
                              setTimeout(() => {
                                res(products);
                              }, 200);}
                             
    }); 
    traerProductos
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [categoryId]);*/

  return (
    <div className="container">
          <p>{props.greeting}</p>
          <ItemList lista={products}/>
    </div>
  );
}

export default ItemListContainer;
