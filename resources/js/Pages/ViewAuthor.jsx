import React, { useState, useEffect, Fragment } from 'react';
import { Link } from '@inertiajs/react';

export default function ViewAuthor({author}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    useEffect(()=>{
        setName(author.name);
        setEmail(author.email);
        setDate(author.created_at);
    }, [])

    return (
        <Fragment>
            <div className="lg:m-10">

  <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
  <Link href="/authors"><button className="w-sm bg-green-700 px-4 py-1.5 text-white transition hover:bg-green-600">Back to Authors</button></Link>

  <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Author Details</h1>

  <div>
    <label className=""> Author Name </label>
    <input type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter book name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" readOnly/>
  </div>
  <div>
    <label className=""> Email </label>
    <input type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter isbn" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" readOnly/>
  </div>

  <div>
    <label className=""> Date registered </label>
    <input type="text"
        id="email"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter isbn" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" readOnly/>
  </div>

</form>

        </div>
        </Fragment>
    );
}
