
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, addDoc, 
          doc, collection, query, Timestamp, where,
        setDoc } from  "firebase/firestore";

        let flag = 0


const firebaseConfig = {
    apiKey: "AIzaSyC7nXkN_ZOesVnBLV35YRn2FlIGeW_P7Pk",
    authDomain: "coderhouse-proyecto-dr.firebaseapp.com",
    projectId: "coderhouse-proyecto-dr",
    storageBucket: "coderhouse-proyecto-dr.appspot.com",
    messagingSenderId: "921097680102",
    appId: "1:921097680102:web:04a0aceaed857a4e33f727"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore= getFirestore(appFirebase);

//Traer los productos para listview
export async function traerProductos(categoryId){
    const itemsCollection= collection(appFirestore, "items");
    let productosSnapshot = []

    //Si se navego hacia una categoría, filtrar por esa categoría
    if(categoryId){
        //Armar query con filtro
        const queryFilter = query(  itemsCollection,
                            where("category", "==", categoryId ));
    
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



  export async function exportDataToFirestore() {
    const productos = [
      { id: "1", 
      title: "Auriculares bluetooth", 
      price: "11", 
      pictureUrl: "https://geektech.me/wp-content/uploads/2020/04/8c06e27d9d2de31e1a1cb5eee0f060d2.jpg",
      description: "Auriculares bluetooth simil Apple",
      stock:11,
      category:"Productos",
    },
    { id: "2", 
      title: "Lectora hub USB 9 en 1", 
      price: "22", 
      pictureUrl: "https://the-gadgeteer.com/wp-content/uploads/2022/04/budi-9in1-usb-reader-1.jpg",
      description: "Lectora hub USB 9 en 1, incluye extractor de tarjetas SIM y conector USB C removible",
      stock:12,
      category:"Productos",
    },
    { id: "3", 
      title: "Powerbank 10000mah USB C", 
      price: "33", 
      pictureUrl: "https://geektech.me/wp-content/uploads/2019/09/a673546f75eb906e058676d52dae2a13.jpg",
      description: "Powerbank 10000mah USB A + USB C, con indicador de carga  ",
      stock:13,
      category:"Productos",
    },
    { id: "4", 
      title: "Powerbank 20000mah Xiaomi", 
      price: "44", 
      pictureUrl: "https://geektech.me/wp-content/uploads/2021/08/7d88e12e5561b2e9d3fc8d5dbb08ab7c.jpg",
      description: "Xiaomi powerbank 20000mah con usb C, permite carga simultanea de 3 dispositivos ",
      stock:14,
      category:"Productos",
    },
    { id: "5", 
      title: "Luces hexagonales LED RGB", 
      price: "55", 
      pictureUrl: "https://images.mmorpg.com/images/contentImages/162022/Govee_Hexa_Light_Panel_-_Illuminated.jpg",
      description: "Luces hexagonales, interconectadas, permiten distintos diseños, colores RGB",
      stock:15,
      category:"LineaGamer",      
    },
    { id: "6", 
      title: "Panel Divoom 64x64", 
      price: "66", 
      pictureUrl: "https://m.media-amazon.com/images/I/61jw4wbabZL._AC_SS450_.jpg",
      description: "Panel Divoom 64x64 con pixeles totalmente RGB se conecta a la app de divoom y permite imagenes customizadas",      
      stock:16,
      category:"LineaGamer",      
    },
    { id: "7", 
      title: "Televisor Divoom con pantalla led 16x16", 
      price: "77", 
      pictureUrl: "https://c1.neweggimages.com/ProductImageCompressAll1280/B8JNS220329kQaUP.jpg",
      description: "Decoracion, mini TV Divoom con keys funcionales y pantalla led 16x16, lector de tarjetas SD integrado",      
      stock:17,
      category:"LineaGamer",      
    },
    { id: "8", 
      title: "Mousepad XXL Diseño", 
      price: "88", 
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_727515-MCO42852762155_072020-O.jpg",
      description: "Mousepad XXL 1,20m por 0,8m galaxy RGB",      
      stock:18,
      category:"LineaGamer",
    },
    ];

  
    const plantCollection = collection(appFirestore, "items");
  
    productos.forEach((item) => {
      const newDoc = doc(plantCollection);
      setDoc(newDoc, item)
        .then((res) => {
          console.log("Documento guardado:", newDoc.id);
        })
        .catch((error) => console.log("error obteniendo los datos: ", error));
    });
  }




  export default appFirestore;
