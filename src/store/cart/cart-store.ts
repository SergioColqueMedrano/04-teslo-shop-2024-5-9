import { CardProduct } from "@/interfaces";
import { create } from "zustand";


interface State {
    cart: CardProduct[];
}


export const useCartStore = create<State>()(

    (set) => ({

        cart: []

    })
)