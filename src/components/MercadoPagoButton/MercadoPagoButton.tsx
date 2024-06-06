'use client'
// components/MercadoPagoButton.tsx
import { useEffect } from 'react';
import Script from 'next/script';

interface MercadoPagoButtonProps {
  title: string;
  unit_price: number;
  quantity: number;
}

const MercadoPagoButton = ({ title, unit_price, quantity }: MercadoPagoButtonProps) => {
  const handlePayment = async () => {
    const response = await fetch('/api/payments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, unit_price, quantity }),
    });
    const data = await response.json();

    if (data.init_point) {
      window.location.href = data.init_point;
    } else {
      console.error('Error creating payment preference');
    }
  };

  return (
    <>
      <Script src="https://sdk.mercadopago.com/js/v2"></Script>
      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded">
        Pagar con MercadoPago
      </button>
    </>
  );
};

export default MercadoPagoButton;
