import React, { useState, useEffect } from 'react';
import { router, Link } from '@inertiajs/react';
import { Button } from 'react-bootstrap';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('/api/authors');
        const data = await response.json();

        if (data.status === 200) {
          setAuthors(data.data);
        } else {
          console.error('Error fetching authors:', data.message);
        }
      } catch (error) {
        console.error('Error fetching authors:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []); // Empty dependency array ensures the effect runs only once

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
    <div>
      <h1>Authors</h1>

      <Link to={`/create`}><button>Add Author</button></Link>
      {loading ? (
        <p>Loading...</p>
      ) : authors.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
                <td>
                <Link to={`/edit/${author.id}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(author.id)}>Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default Authors;
