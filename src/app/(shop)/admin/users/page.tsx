export const revalidate = 0;

import { Title } from '@/components';

import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';
import { getPaginateUsers } from '@/actions';
import { redirect } from 'next/navigation';
import { UserTable } from './ui/UserTable';

export default async function OrdersPage() {

  const { ok, users = [] } = await getPaginateUsers()

  if(!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <div className="mb-10">
        <UserTable users={ users }/>
      </div>
    </>
  );
}