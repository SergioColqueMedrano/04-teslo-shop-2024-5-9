import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";


export default function CartPage() {

  //redirect('/empty');
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>
          
            <ProductsInCart/>
          
          </div>

          <div className="absolute top-10 right-10 bg-white rounded-xl shadow-xl p-7 h-[300px]">
              <h2 className="text-2xl mb-2">Resumen de orden</h2>
              
              <OrderSummary />
                  
              <div className="mt-5 mb-1 w-full">
                  <Link 
                  className="flex btn-primary justify-center"
                  href="/checkout/address">
                    Checkout
                  </Link>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}