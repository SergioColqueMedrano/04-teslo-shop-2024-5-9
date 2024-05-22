import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: CartProduct[];

    addProductTocart: (product: CartProduct) => void;


}


export const useCartStore = create<State>()(

    //persist

    (set, get) => ({

        cart: [],


        addProductTocart: (product: CartProduct) =>{
            const {cart} =get();

            const productInCart = cart.some(
                (item) => (item.id === product.id && item.size === product.size)
            );

            if (!productInCart){
                set({ cart: [...cart,product ]});
                return;
            }


            const updatedCartProducts = cart.map((item) => {
                if(item.id === product.id && item.size === product.size){
                    return { ...item, quantity: item.quantity + product.quantity}
                }

                return item;
            })
        }
    })

)

