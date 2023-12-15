import React, { useState, useEffect, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from 'react-bootstrap';
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";

const Authors = ({ authors}) => {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this author?');

    if (confirmDelete) {
      try {
        const response = await fetch(`/api/authors/${id}/delete`, {
          method: 'DELETE',
        });

        const data = await response.json();

        if (data.status === 200) {
          // Update the local state to reflect the deletion
          setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== id));
          alert('Author deleted successfully');
        } else {
          alert('Something went wrong while deleting the author');
        }
      } catch (error) {
        console.error('Error deleting author:', error.message);
      }
    }
  };

  return (

    <Fragment>
<div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-700">Authors</h2>
      <span class="text-xs text-gray-500">View accounts of registered authors</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="ml-10 space-x-8 lg:ml-40">
      <Link href="/register-author"><button class="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Register Author</button></Link>

      </div>
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Author Name</th>
            <th class="px-5 py-3">Email</th>
            <th class="px-5 py-3">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
        {authors.map((author) => (
          <tr key={author.id}>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{author.id}</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="ml-3">
                  <p class="whitespace-no-wrap">{author.name}</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">{author.email}</p>
            </td>

            <td class="border-b items-center border-gray-200 bg-white px-5 py-5 text-sm">
            <Link href={`/edit/${author.id}`}><button class="w-sm bg-gray-900 px-4 py-1.5 text-white transition hover:bg-gray-700">Edit</button></Link>
                <button onClick={() => handleDelete(author.id)} class="w-sm ml-2 bg-red-700 px-4 py-1.5 text-white transition hover:bg-red-600">Delete</button>


              </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div class="mt-2 inline-flex sm:mt-0">
        <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>

    </Fragment>

  );
};

export default Authors;
