import React, { useState, useEffect, Fragment } from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateBook({authors}) {
    const [name, setName] = useState("");
    const [ISBN, setISBN] = useState("");
    const [author_id, setAuthor_id] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        const data = {name, ISBN, author_id};
        console.log(data);
        Inertia.post("/save-book", data);
        //router.post('/api/create-book', values);
    }

    return (
        <Fragment>
            <div className="lg:m-10">
  <form onSubmit={handleSubmit} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register Book Details</h1>


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
                <option value="" disabled selected>Select an author</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </select>
      </div>
    </div>



  <div>
    <button type="submit" className="mt-5 w-full rounded-md bg-green-600 p-2 text-center font-semibold text-white">Register Book</button>
  </div>
</form>

        </div>
        </Fragment>
    );
}
