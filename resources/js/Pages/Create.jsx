import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Create() {
    const [values, setValues] = useState({
        name: "",
        email: ""
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post('/api/create-author', values);
    }

    return (
        <div className="container mt-5">
            <h1>Create Author</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}
