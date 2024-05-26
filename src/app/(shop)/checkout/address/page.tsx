import { Title } from '@/components';
import Link from 'next/link';
import { countries } from '../../../../seed/seed-countries';
import { get } from 'http';
import { getCountries } from '@/actions';
import { AddressForm } from './ui/AddressForm';

export default async function AddressPage() {
  
  const countries = await getCountries();
  
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={countries} />

      </div>




    </div>
  );
}