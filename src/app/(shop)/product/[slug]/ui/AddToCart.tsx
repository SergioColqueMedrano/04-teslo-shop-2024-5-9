'use client'


import { QuantitySelector, SizeSelector } from '@/components'
import { Product, Size } from '@/interfaces';
import { useState } from 'react';


interface Props {
    product: Product;
}

export const AddToCart = ({ product }: Props) => {

    const [size, setSize] = useState<Size | undefined>()

  return (
    <>
    <SizeSelector 
          selectedSize={ size }
          availableSizes={ product.sizes }
          onSizeChanged={ setSize }
          />

          <QuantitySelector
            quantity={ 2 }
          />


          <button className="btn-primary my-5">
            Agregar al carrito
          </button>
    </>
  )
}
