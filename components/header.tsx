import { auth, signOut } from '@/auth';
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';
import { Alert } from './ui/alert';

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  const logoutAction = async () => {
    'use server';
    await signOut();
  };

  return (
    <header>
      <Alert className='rounded-none border-none bg-green-900 text-white text-center text-xs p-2 mb-5'>
        <p>
          <strong>COVID-19:</strong> A Momento está comprometida em ajudar nossos clientes durante essa crise. <Link href='#'>Leia mais</Link>
        </p>
      </Alert>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'>Momento</h1>
        </Link>
        <nav className='flex space-x-6'>
          <ul className='flex items-center space-x-4'>
            <li>
              <Link href='#solutions' className='text-ct-dark-600'>
                Soluções e serviços
              </Link>
            </li>
            <li>
              <Link href='#resources' className='text-ct-dark-600'>
                Recursos
              </Link>
            </li>
            <li>
              <Link href='#pricing' className='text-ct-dark-600'>
                Preços
              </Link>
            </li>
            <li>
              <div>+55 (31) 9 9999-9999</div>
            </li>
            {!user && (
              <>
                <li>
                  <Link href='/login' className='text-green-700'>
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <form action={logoutAction} className='flex'>
                <li>
                  <Link href='/client-side' className='text-ct-dark-600'>
                    Client
                  </Link>
                </li>
                <li className='ml-4'>
                  <Link href='/profile' className='text-ct-dark-600'>
                    Profile
                  </Link>
                </li>
                <li className='ml-4'>
                  <button>Logout</button>
                </li>
              </form>
            )}
          </ul>
        </nav>
        <Link href='/register'>Crie sua conta</Link>
      </div>
    </header>
  );
};

export default Header;
