import React, { useState, useEffect, Fragment } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function EditBook({book, authors, success}) {
    const [name, setName] = useState("");
    const [ISBN, setISBN] = useState("");
    const [author_id, setAuthor_id] = useState("");
    const { flash } = usePage().props

    useEffect(()=>{
        setName(book.name);
        setISBN(book.ISBN);
        setAuthor_id(book.author_id);
    }, [])


    function handleSubmit(e) {
        e.preventDefault();
        const data = {name, ISBN, author_id};
        console.log(data);
        Inertia.put(`/book/${book.id}`, data);
    }

    return (
        <Fragment>
            <div className="lg:m-10">
  <form onSubmit={handleSubmit} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <Link href="/books"><button className="w-sm bg-gray-900 px-4 py-1.5 text-white transition hover:bg-gray-700">Back to Books</button></Link>

  <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Edit Book Details</h1>

  {flash.success && (
        <div className="bg-green-200 p-4 mb-4">
          {flash.success}
        </div>
      )}
  <div>
    <label className=""> Book Name </label>
    <input type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter book name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required/>
  </div>
  <div>
    <label className=""> Book ISBN </label>
    <input type="text"
        id="ISBN"
        value={ISBN}
        onChange={(e) => setISBN(e.target.value)}
        placeholder="Enter isbn" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" maxLength={13} required/>
  </div>
    <div>
      <label className=""> Author </label>
      <div className="relative w-100 mt-2 bg-gray-100 rounded-lg">
         <select
                id="author_id"
                name="author_id"
                value={author_id}
                onChange={(e) => setAuthor_id(e.target.value)}
                className="mt-1 p-2 border border-gray-100 rounded-md w-full"
              >
                <option value="" disabled>Select an author</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
      </div>
    </div>



  <div>
  <button type='submit' className="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Save Book Details</button>

    </div>
</form>

        </div>
        </Fragment>
    );
}
