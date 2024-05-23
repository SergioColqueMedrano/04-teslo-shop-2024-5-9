'use server'

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
import { AuthError } from 'next-auth';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {


     await signIn('credentials', Object.fromEntries(formData));
  

} catch (error) {
   // if (error instanceof AuthError) {
     // switch (error.type) {
       // case 'CredentialsSignin':
          return 'CredentialsSingin'
        //default:
         // return 'Something went wrong.';
    
    
    //throw error;
  }
}