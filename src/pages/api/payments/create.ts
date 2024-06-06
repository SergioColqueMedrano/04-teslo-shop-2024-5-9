// pages/api/payments/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from '../../../config/mercadopago';
import { Preference } from 'mercadopago';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, unit_price, quantity } = req.body;

    const preferenceData = {
      items: [
        {
          id: 'item-id-1', // Agrega un id único para cada item
          title,
          unit_price: parseFloat(unit_price),
          quantity: parseInt(quantity),
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_URL}/pending`,
      },
      auto_return: 'approved',
    };

    try {
      const preference = new Preference(mercadopago);
      const preferenceResponse = await preference.create({
        body: preferenceData,
      });

      // Aquí devuelves el objeto completo
      res.status(200).json(preferenceResponse);
    } catch (error) {
      console.error('Error creating payment preference:', error);
      res.status(500).json({ error: 'Failed to create payment preference' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
