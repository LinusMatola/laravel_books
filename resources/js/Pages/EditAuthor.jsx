import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react'
import { useParams } from 'react-router-dom'

export default function EditAuthor() {
    // const [values, setValues] = useState({ // Form fields
    //     name: author.name,
    //     email: author.email
    // });
    let { id } = useParams();


    useEffect(() =>{

        console.log(id);
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.put(`/authors/${id}`, values)
    }

    return (
        <>
            <h1>Edit Author</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        //value={values.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        //value={values.email}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>

                <Button variant="primary">
            Click me
        </Button>

            </form>
        </>
    )
}