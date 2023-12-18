import React, { useState, useEffect, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Authors = ({ authors}) => {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this author?');

    if (confirmDelete) {
      try {
        Inertia.delete(`/author/${id}`);
      } catch (error) {
        console.error('Error deleting author:', error.message);
      }
    }
  };



  return (

<Fragment>
<div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div className="flex items-center justify-between pb-6">
    <div>
      <h2 className="font-semibold text-gray-700">Authors</h2>
      <span className="text-xs text-gray-500">View accounts of registered authors</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="ml-10 space-x-8 lg:ml-40">
      <Link href="/register-author"><button className="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Register New Author</button></Link>
      <Link href="/books"><button className="w-sm bg-yellow-600 px-4 py-1.5 text-white transition hover:bg-yellow-500">View Books</button></Link>

      </div>
    </div>
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th className="px-5 py-3">ID</th>
            <th className="px-5 py-3">Author Name</th>
            <th className="px-5 py-3">Email</th>
            <th className="px-5 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
        {authors.map((author) => (
          <tr key={author.id}>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{author.id}</p>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="whitespace-no-wrap">{author.name}</p>
                </div>
              </div>
            </td>
            <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p className="whitespace-no-wrap">{author.email}</p>
            </td>

            <td className="border-b items-center border-gray-200 bg-white px-5 py-5 text-sm">
                <Link className='mr-2' href={`/author/${author.id}`}><button className="w-sm bg-green-600 px-4 py-1.5 text-white transition hover:bg-green-500">Details</button></Link>
                <Link href={`/edit-author/${author.id}`}><button className="w-sm bg-gray-900 px-4 py-1.5 text-white transition hover:bg-gray-700">Edit</button></Link>
                <button onClick={() => handleDelete(author.id)} className="w-sm ml-2 bg-red-700 px-4 py-1.5 text-white transition hover:bg-red-600">Delete</button>
              </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>

</Fragment>

  );
};

export default Authors;
