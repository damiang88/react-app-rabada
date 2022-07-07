
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where } from  "firebase/firestore";



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

export async function traerProductos(categoryId){
    const itemsCollection= collection(appFirestore, "items");
    let productosSnapshot = []

    if(categoryId){
        const queryFilter = query(  itemsCollection,
                            where("categoryID", "==", categoryId ));
    
         productosSnapshot= await getDocs(queryFilter);

    }else{
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


export async function traerUnProducto(itemId) {
    const docref = doc(appFirestore, "items", itemId);
  
    const docSnapshot = await getDoc(docref);
  
    return {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };
  }

export default appFirestore;