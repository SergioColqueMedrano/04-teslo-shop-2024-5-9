// config/mercadopago.ts
import { MercadoPagoConfig } from 'mercadopago';

const mercadopago = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '' });

export default mercadopago;