import { createContext} from  "react";
import { useState } from "react";

export const CartContext= createContext();

export const CartProvider= ({children}) =>{

    let cartProductFilt = []
    const [cart, setCart]= useState([]);
    
    //funcion para quitar un item del carrito
    const removeItem = (item) => {
        
        cartProductFilt = cart.filter(p => p.id !== item.id )
        setCart(cartProductFilt);

    }; 

    //funcion para agregar al cart
    const addItem = (item, cantidad) => {

        //evita agregar el mismo item dos veces
        if (isInCart(item.id)) {
            console.log('el item esta en el carrito, agrega la cantidad');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //verificar si el producto ya está en el carrito
    const isInCart = (id) => {
        //some devuelve true o false
        return cart.some((p) => p.id === id);
    };

    //funcion para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    return(       
       
        <CartContext.Provider  value={{cart, addItem, clearCart, removeItem}}>        
        {children}
        </CartContext.Provider>
      
    );
};