import React, { useState, Fragment } from 'react';
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateAuthor() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        const data = {name, email};
        console.log(data);
        Inertia.post('/author', data);
    }


    return (
        <Fragment>
            <div className="lg:m-10">

  <form onSubmit={handleSubmit} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <Link href="/authors"><button className="w-sm bg-gray-900 px-4 py-1.5 text-white transition hover:bg-gray-700">Back to Authors</button></Link>

  <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Author Details</h1>

  <div>
    <label className=""> Author Name </label>
    <input type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter author name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required/>
  </div>
  <div>
    <label className=""> Email </label>
    <input type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" required/>
  </div>

  <div>
  <button type='submit' className="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Register Author</button>

  </div>

</form>

        </div>
        </Fragment>
    );
}
