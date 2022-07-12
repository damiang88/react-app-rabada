
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, addDoc, 
          doc, collection, query, Timestamp, where } from  "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDL5SM-Wrdv2rmRSfJHcEkMQlbKVGojflQ",
    authDomain: "coderhouse-proyecto01.firebaseapp.com",
    projectId: "coderhouse-proyecto01",
    storageBucket: "coderhouse-proyecto01.appspot.com",
    messagingSenderId: "288742359615",
    appId: "1:288742359615:web:74410e0ba4f2d6e768ee8a"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore= getFirestore(appFirebase);

export function testDatabse(){
    console.log(appFirestore)
}

//Traer los productos para listview
export async function traerProductos(categoryId){
    const itemsCollection= collection(appFirestore, "items");
    let productosSnapshot = []

    //Si se navego hacia una categoría, filtrar por esa categoría

    if(categoryId){
        //Armar query con filtro
        const queryFilter = query(  itemsCollection,
                            where("categoryID", "==", categoryId ));
    
         productosSnapshot= await getDocs(queryFilter);

    }else{
        //Obtener todos los productos
         productosSnapshot= await getDocs(itemsCollection);

    }

    let respuesta= productosSnapshot.docs.map(doc=> {
      return{
        ...doc.data(),
        id: doc.id
      }
    });
    return respuesta;
}


//Busqueda de un solo producto para itemdetail
export async function traerUnProducto(itemId) {
    //Armar consulta de item especifico
    const docref = doc(appFirestore, "items", itemId);

    //Hacer consulta asincronica
    const docSnapshot = await getDoc(docref);
  
    return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };
  }

// Crear orden en Firebase
  export async function createBuyOrder(dataOrder) {

    //Conectar con collección de ordenes
    const orderColectionRef = collection(appFirestore, "orders");
    const dateTimestamp = Timestamp.now();
  
    const dataOrderWithDate = {
      ...dataOrder,
      date: dateTimestamp,
    };
  
    const orderCreated = await addDoc(orderColectionRef, dataOrderWithDate);
  
  
    return orderCreated;
  }

export default appFirestore;