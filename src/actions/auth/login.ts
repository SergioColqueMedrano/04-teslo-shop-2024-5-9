'use server'

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {


     await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
  return 'Success'

} catch (error) {

    console.log(error);
    //if((error as any).type === 'CredentialsSingin') {
      return 'CredentialsSingin'
  //}

   // return 'UnknownError';
       
  }
}