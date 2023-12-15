import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Button } from 'react-bootstrap';

export default function CreateBook() {
    const [values, setValues] = useState({
        name: "",
        ISBN: "",
        author_id: ""
    });

    const [authors, setAuthors] = useState([]);
    const [loadingAuthors, setLoadingAuthors] = useState(true);

    useEffect(() => {
        // Fetch the list of authors from your API
        const fetchAuthors = async () => {
            try {
                const response = await fetch('/api/authors');
                const data = await response.json();

                if (data.status === 200) {
                    setAuthors(data.data);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert(error.message);
            } finally {
                setLoadingAuthors(false);
            }
        };

        fetchAuthors();
    }, []);

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
        router.post('/api/create-book', values);
    }

    return (
        <div className="container mt-5">
            <h1>Register Book Details</h1>
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
                    <label htmlFor="name" className="form-label">ISBN:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ISBN"
                        value={values.ISBN}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="author_id" className="form-label">Author:</label>
                    <select
                        className="form-control"
                        id="author_id"
                        value={values.author_id}
                        onChange={handleChange}
                    >
                        {loadingAuthors ? (
                            <option disabled>Loading Authors...</option>
                        ) : (

                            authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))
                        )}
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
}
