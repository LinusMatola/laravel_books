import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home(){

    return (
    <div className="relative mx-auto w-full px-5 py-16 text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
  <h2 className="mb-5 text-4xl text-center font-serif  sm:text-5xl">Welcome. What would you like to do today?</h2>
  <p className="mb-12 text-center text-lg text-gray-600">select the options below.</p>

  <div className="mt-20 flex justify-center items-center align-center">
  <Link href="/books" className="mr-4 inline-flex cursor-pointer rounded-full bg-blue-500 px-8 py-4 text-white">Manage Books</Link>
    <Link href="/authors" className="inline-flex cursor-pointer rounded-full bg-green-600 px-8 py-4 text-white">Manage Authors</Link>
  </div>
</div>

);
}