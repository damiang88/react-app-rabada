import { createContext} from  "react";
import { useState } from "react";

export const CartContext= createContext();

export const CartProvider= ({children}) =>{

    let cartProductFilt = []
    const [cart, setCart]= useState([]);

    //funcion para quitar un item del carrito
    const removeItem = (id) => {
        
        cartProductFilt = cart.filter(p => p.id !== id )
        setCart(cartProductFilt);

    }; 

    //funcion para agregar al cart
    const addItem = (item, cantidad) => {

        //evita agregar el mismo item dos veces
        if (isInCart(item.id)) {
            const idToAdd= item.id;
            let itemToAdd= cart.find(cadaItem=>cadaItem.id===idToAdd);
            itemToAdd.cantidad += cantidad;
            let newCart = cart.filter(p => p.id !== item.id );

            setCart([...newCart, { ...itemToAdd}]);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };


    //Calcular el total en el carrito
    const CantInCart = () => 
    {
        let total = 0
        cart.forEach( item => total += item.cantidad)
        return total;
    };

    function totalPriceCart() {
        let total = 0;
        cart.forEach((item) => (total = total + item.cantidad * item.price));

        return total;
      }

      
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
       
        <CartContext.Provider  value={{cart, addItem, clearCart, removeItem,CantInCart, 
             totalPriceCart}}>        
        {children}
        </CartContext.Provider>
      
    );
};