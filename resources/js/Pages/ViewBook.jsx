import React, { useState, useEffect, Fragment } from 'react';
import { Link } from '@inertiajs/react';

export default function ViewAuthor({book}) {
  useEffect(() =>{
    console.log(book);
  })
    return (
        <Fragment>
            <div className="lg:m-10">
  <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <Link href="/books"><button className="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Back to Books List</button></Link>

  <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Book Details</h1>

  <div>
    <label className=""> Book Name </label>
    <input type="text"
        id="name"
        value={book.name}
        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" disabled/>
  </div>
  <div>
    <label className=""> ISBN </label>
    <input type="text"
        id="email"
        value={book.ISBN}
        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" disabled/>
  </div>

  <div>
    <label className=""> Date registered </label>
    <input type="text"
        id="email"
        value={book.created_at}
        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" disabled/>
  </div>
  <div>
    <label className=""> Author Name </label>
    <input type="text"
        id="email"
        value={book.author.name}
        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" disabled/>
  </div>
  <div>
    <label className=""> Author Email </label>
    <input type="text"
        id="email"
        value={book.author.email}
        className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" disabled/>
  </div>

</form>

        </div>
        </Fragment>
    );
}
