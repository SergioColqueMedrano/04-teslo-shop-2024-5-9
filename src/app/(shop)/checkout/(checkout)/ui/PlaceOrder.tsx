'use client'


import { placeOrder } from "@/actions";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat, sleep } from "@/utils";
import clsx from "clsx";
import Link from "next/link"
import { useEffect, useState } from "react";

export const PlaceOrder = () => {

  const [loaded, setLoaded] = useState(false); 
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);  

  const address = useAddressStore( state => state.address );
  
  const { itemsInCart, subTotal, tax, total} = useCartStore( state => state.getSummaryInformation());

  const cart = useCartStore(state => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, [])

  const onPlaceOrder = async() => {
    setIsPlacingOrder(true);

    

    const productsToOrder = cart.map(product => ({
        productId: product.id,
        quantity: product.quantity,
        size: product.size,
    }))
    console.log({ address, productsToOrder });
    //await sleep(2);
    const resp = await placeOrder(productsToOrder, address);
    console.log({resp})
    setIsPlacingOrder(false);
  }
  
  if (!loaded){
    return <div>Cargando...</div>
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
              <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
              <div className="mb-10">
                <p className="text-xl">
                    {address.firstName} {address.lastName}
                </p>
                <p>{address.address}</p>
                <p>{address.address2}</p>
                <p>{address.postalCode}</p>
                <p>
                    {address.city} {address.country}
                </p>
                <p>{address.phone}</p>
                


              </div>

              <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

              <h2 className="text-2xl mb-2">Resumen de orden</h2>
              <div className="grid grid-cols-2">
              <span>No. Productos</span>
                  <span className="text-right">{ itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos` }</span>


                  <span>Subtotal</span>
                  <span className="text-right">{ currencyFormat(subTotal)}</span>

                  <span>Impuestos (15%)</span>
                  <span className="text-right">{ currencyFormat(tax)}</span>

                  <span className="mt-5 text-2xl">Total</span>
                  <span className="mt-5 text-2xl text-right">{ currencyFormat(total)}</span>
              </div>
                  
              <div className="mt-5 mb-1 w-full">
                  <p className="mb-5">
                    <span className="text-xs">
                      Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros <a href="#" className="underline">términos</a>
                    </span>

                  </p>

                  <p className="text-red-500">Error de creación</p>

                  <button
                  onClick={onPlaceOrder} 
                  className={
                    clsx({
                        'btn-primary': !isPlacingOrder,
                        'btn-disable': isPlacingOrder
                    })
                  }
                  //href="/orders/123"
                  >
                    Colocar orden
                  </button>
              </div>
          </div>
  )
}